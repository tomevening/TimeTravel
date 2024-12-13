import { shallowRef } from 'vue';

function sleep(delay: number) {
  return new Promise(r => setTimeout(r, delay));
}

function mockFetch<T extends Map<unknown, unknown>, P extends string = string>(
  prefix: P,
  data: T,
) {
  return async function (path: `/${P}/${string}`): Promise<unknown> {
    await sleep(Math.random() * 1000);
    const id = path.split('/').at(-1);
    if (id === '') return [...data.keys()];
    const value = data.get(id);
    if (value === undefined) {
      throw new Error('404');
    }
    return value;
  };
}

export const myFetch = mockFetch(
  'posts',
  new Map([
    ['1', { id: 1 }],
    ['2', { id: 2 }],
    ['3', { id: 3 }],
    ['4', { id: 4 }],
    ['5', { id: 5 }],
  ]),
);

type TPost = { id: string };

const postIds = shallowRef<string[] | null>(null);
const postTwo = shallowRef<TPost | null>(null);

myFetch('/posts/').then(value => (postIds.value = value as string[]));
myFetch('/posts/2').then(value => (postTwo.value = value as TPost));
