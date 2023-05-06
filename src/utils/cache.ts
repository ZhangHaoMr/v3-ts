class LocalCache {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCache(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getCache(key: string) {
    const data = window.localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key);
  }

  clearCache() {
    window.localStorage.clear();
  }
}
export default new LocalCache();
