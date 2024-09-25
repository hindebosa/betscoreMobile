import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
// import * as aesjs from 'aes-js';
// import 'react-native-get-random-values';

// class LargeSecureStore {
//   private async _encrypt(key: string, value: string) {
//     const encryptionKey = crypto.getRandomValues(new Uint8Array(256 / 8));

//     const cipher = new aesjs.ModeOfOperation.ctr(
//       encryptionKey,
//       new aesjs.Counter(1),
//     );
//     const encryptedBytes = cipher.encrypt(aesjs.utils.utf8.toBytes(value));

//     return aesjs.utils.hex.fromBytes(encryptedBytes);
//   }

//   private async _decrypt(key: string, value: string) {
//     const encryptionKeyHex = await SecureStore.getItemAsync(key);
//     if (!encryptionKeyHex) {
//       return encryptionKeyHex;
//     }

//     const cipher = new aesjs.ModeOfOperation.ctr(
//       aesjs.utils.hex.toBytes(encryptionKeyHex),
//       new aesjs.Counter(1),
//     );
//     const decryptedBytes = cipher.decrypt(aesjs.utils.hex.toBytes(value));

//     return aesjs.utils.utf8.fromBytes(decryptedBytes);
//   }

//   async getItem(key: string) {
//     const encrypted = await AsyncStorage.getItem(key);
//     if (!encrypted) {
//       return encrypted;
//     }

//     return await this._decrypt(key, encrypted);
//   }

//   async removeItem(key: string) {
//     await AsyncStorage.removeItem(key);
//     await SecureStore.deleteItemAsync(key);
//   }

//   async setItem(key: string, value: string) {
//     const encrypted = await this._encrypt(key, value);

//     await AsyncStorage.setItem(key, encrypted);
//   }
// }

const supabaseUrl = 'https://lqcvhvtggjhpjtgwotjs.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxY3ZodnRnZ2pocGp0Z3dvdGpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwMzQ0OTIsImV4cCI6MjA0MDYxMDQ5Mn0.TkwKHz-BXWMCn1i4Ne-u0WQ_WzuzFfx7HFIMTDeg8fM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
