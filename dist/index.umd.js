!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("base-64"),require("uuid"),require("immer"),require("firebase/app"),require("firebase/firestore")):"function"==typeof define&&define.amd?define(["exports","base-64","uuid","immer","firebase/app","firebase/firestore"],t):t((e=e||self).firebaseDbManager={},e.base64,e.uuid,e.immer,e.firebase)}(this,function(e,t,n,i,r){var o,c="default"in i?i.default:i;function s(e){return void 0!==e.doc}function u(e){return void 0!==e.setReference}var l=function(){function e(e,t,n){this[o]=!0,this.data=e,null!=t&&null!=n&&(this.reference=t,this.collections=n,this.setReferenceToSubCollections())}var t=e.prototype;return t.setReferenceToSubCollections=function(){var e=this;null!=this.collections&&Object.values(this.collections).forEach(function(t){u(t)&&t.setReference(e.reference.collection(t.id))})},t.id=function(){return this.data.id},t.modifyData=function(e){return c(this.data,function(t){Object.assign(t,e)})},e}();function f(e,t){Object.values(e).forEach(function(e){void 0!==e.db&&u(e)&&(e.db=t,e.setReference(t.collection(e.id)))})}o=i.immerable;var a=function(){function e(e,t){this.subscriptions=[],this.id=e,this.db=null,this.reference=null,this.collections=t,this.nextVisibleIndex=0}var t=e.prototype;return t.setReference=function(e){this.reference=e,null!=this.db&&null!=this.collections&&f(this.collections,this.db)},t.createDocument=function(e,t){try{var i=function(){return new l(u,f,r.collections)},r=this,o=r.getCollectionReference(),s=e.id?e.id:n.v4(),u=c(e,function(e){e.id=s}),f=o.doc(s),a=function(){if(!t)return Promise.resolve(f.set(u,{merge:!0})).then(function(){});f.set(u,{merge:!0})}();return Promise.resolve(a&&a.then?a.then(i):i())}catch(e){return Promise.reject(e)}},t.getDocument=function(e){try{var t=this,n=t.getCollectionReference().doc(e);return Promise.resolve(n.get()).then(function(e){if(e.exists){var i=e.data();return new l(i,n,t.collections)}throw Error("Document does not exist, check your id")})}catch(e){return Promise.reject(e)}},t.get=function(e,t,n,i){try{var r=this,o=r.getCollectionReference(),c=r.getQuery(o,e,t,n,i);return Promise.resolve(c.get()).then(function(e){return e.empty?[]:(r.nextVisibleIndex+=e.size+1,e.docs.map(function(e){var t=e.data();return new l(t,e.ref,r.collections)}))})}catch(e){return Promise.reject(e)}},t.updateDocument=function(e){try{var t=this,n=t.getCollectionReference().doc(e.id);return Promise.resolve(n.update(e)).then(function(){return new l(e,n,t.collections)})}catch(e){return Promise.reject(e)}},t.deleteDocument=function(e){try{var t=this.getCollectionReference();return Promise.resolve(t.doc(e).delete()).then(function(){})}catch(e){return Promise.reject(e)}},t.subscribeToDocument=function(e,t,n,i){var r=this,o=this.getCollectionReference().doc(e).onSnapshot(function(e){if(e.exists){var n=e.data(),o=new l(n,e.ref,r.collections);t(o)}else i()},function(e){n(e)});return this.subscriptions.push(o),o},t.subscribe=function(e,t,n,i,r){var o=this,c=this.getCollectionReference(),s=this.getQuery(c,n,i,void 0,r).onSnapshot(function(t){if(t.empty)e([]);else{var n=t.docs.map(function(e){var t=e.data();return new l(t,e.ref,o.collections)});e(n)}},function(e){t(e)});return this.subscriptions.push(s),s},t.subscribeWithDiffing=function(e,t,n,i,r){var o=this,c=this.getCollectionReference(),s=this.getQuery(c,n,i,void 0,r).onSnapshot(function(t){if(!t.empty){var n=new Map;t.docChanges().forEach(function(e){var t=e.doc.data();switch(e.type){case"added":case"modified":n.set(t.id,new l(t,e.doc.ref,o.collections));break;case"removed":n.delete(t.id)}}),e(n)}},function(e){t(e)});return this.subscriptions.push(s),s},t.removeAllSubscriptions=function(){this.subscriptions.forEach(function(e){return e()})},t.resetPagination=function(){this.nextVisibleIndex=0},t.getCollectionReference=function(){if(null!=this.reference&&s(this.reference))return this.reference;throw Error("No reference set or is a document reference")},t.getQuery=function(e,t,n,i,r){var o=e;return null!=t&&(o=o.orderBy(t.property,t.direction)),null!=n&&(o=o.where(n.property,n.direction,n.value)),null!=i&&(o=null!=i.page?o.startAt(i.pageSize*i.page+(i.page>0?1:0)).limit(i.pageSize):o.startAt(this.nextVisibleIndex).limit(i.pageSize)),null!=r&&(o=r(o)),o},e}(),d=function(e){var t,n;function i(){return e.apply(this,arguments)||this}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i}(a);global.btoa||(global.btoa=t.encode),global.atob||(global.atob=t.decode),e.Collection=a,e.Database=function(e){this.db=r.firestore(),f(e,this.db),this.collections=e},e.Document=l,e.SubCollection=d,e.isCollectionReference=s,e.isDocumentReference=function(e){return void 0!==e.collection}});
//# sourceMappingURL=index.umd.js.map
