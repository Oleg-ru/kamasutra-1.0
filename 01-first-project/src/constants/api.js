const USE_PROXY = true; // переключить на false когда API будет работать напрямую

export const API_BASE = USE_PROXY
    ? 'https://corsproxy.io/?https://social-network.samuraijs.com/api/1.0'
    : 'https://social-network.samuraijs.com/api/1.0';