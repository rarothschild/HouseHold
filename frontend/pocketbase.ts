import PocketBase from 'pocketbase';
import { createStore } from "solid-js/store";

const pb = new PocketBase('http://127.0.0.1:8090');

const [user, setUser] = createStore(pb.authStore.model);