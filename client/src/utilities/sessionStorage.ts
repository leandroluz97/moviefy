type key = 'accessToken' | 'refreshToken';

export const STORAGE_KEY: Record<key, key> = {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
};

export const storage = {
    get: (key: key) => sessionStorage.getItem(key),
    set: (key: key, token: string) => sessionStorage.setItem(key, token),
    remove: (key: key) => sessionStorage.removeItem(key),
    clear: () => sessionStorage.clear(),
};