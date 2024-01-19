type Storage = {
  get<T>(key: string): T | null;
  set(key: string, data: unknown): void;
  remove(key: string): void;
};

const storage: Storage = {
  get<T>(key: string): T | null {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  },

  set(key: string, data: unknown): void {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  },

  remove(key: string): void {
    localStorage.removeItem(key);
  },
};

export default storage;
