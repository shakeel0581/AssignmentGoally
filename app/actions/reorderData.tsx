interface docs {
  "_id": String,
  "type": String,
  "ctaOrdering": Number,
  "entityType": String,
  "devices": [],
  "libraryType": String,
  "ordering": Number,
  "clientId": String,
  "createdBy": String,
  "notifications": [],
  "visualAidUrl": String,
  "duration": Number,
  "schedule": {},
  "name": String,
  "__v": Number,
  "createdAt": Date,
  "updatedAt": String,
  "id": String
};

export const ASC_Data = (Data: docs[]): docs[] => {
  Data.sort(function compare(a: docs, b: docs) {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });
  return Data;
}

export const DESC_Data = (Data: docs[]): docs[] => {
  Data.sort(function compare(a: docs, b: docs) {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateA.getTime() - dateB.getTime() ;
  });
  return Data;
}