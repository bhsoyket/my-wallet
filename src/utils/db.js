import Dexie from "dexie";

const db = new Dexie("MyWalletDB");
db.version(1).stores({ wallet: "id,note,amount,created_at" });

export default db;