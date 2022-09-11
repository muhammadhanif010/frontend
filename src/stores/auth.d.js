import { defineStore } from 'pinia';
// import * as s$auth from '@/services/auth';
import { setCookies, certCookies } from '@/utils/cookies';

import { parseISO } from 'date-fns';

const d$auth = defineStore({
  id: 'auth',
  state: () => ({
    id: undefined,
    name: undefined,
    role: undefined,
  }),
  actions: {
    async a$setUser() {
      try {
        const { id, name, role } = certCookies();
        this.id = id;
        this.name = name;
        this.role = role;
        return 'User Authenticated!';
      } catch ({ message }) {
        this.id = undefined;
        this.name = undefined;
        this.role = undefined;
        throw message;
      }
    },
    async a$login() {
      try {
        const { data } = {
          "status": true,
          "data": {
              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibiI6Ik11aGFtbWFkIEZhdXppIEhhbmlmIiwicmkiOiJhZG1pbiJ9.AORLyGc1FtR499JvZgQU3dav6MY2ItDMq3k8TmuLGp8",
              "expiresAt": "2023-09-02 17:18:18"
          }
      };
        console.log(data);
        setCookies('CERT', data.token, { datetime: parseISO(data.expiresAt) });
        this.a$setUser();
        console.log(this.g$user);
        return true;
      } catch ({ error, message }) {
        throw message ?? error;
      }
    },
  },
  getters: {
    g$user: ({ id, name, role }) => ({ id, name, role }),
  },
});

export default d$auth;
