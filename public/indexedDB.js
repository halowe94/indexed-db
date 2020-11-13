// export function checkForIndexedDb() {
//   if (!window.indexedDB) {
//     console.log("Your browser doesn't support a stable version of IndexedDB.");
//     return false;
//   }
//   return true;
// }

function saveRecord(method, object) {
  console.log("from saveRecord");
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("name", 1);
    let db, tx, store;

    request.onupgradeneeded = function (e) {
      const db = request.result;
      db.createObjectStore("myStore", { autoIncrement: true });
    };

    request.onerror = function (e) {
      console.log("There was an error");
    };

    request.onsuccess = function (e) {
      db = request.result;
      tx = db.transaction("myStore", "readwrite");
      store = tx.objectStore("myStore");

      db.onerror = function (e) {
        console.log("error");
      };
      if (method === "put") {
        store.add(object);
      } else if (method === "get") {
        console.log("from get condition of saveRecord");
        const all = store.getAll();
        all.onsuccess = function () {
          resolve(all.result);
        };
      } else if (method === "delete") {
        store.delete(object._id);
      }
      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}

//need to add eventlistener function for when you get back online
window.addEventListener("online", saveRecord("get"));
