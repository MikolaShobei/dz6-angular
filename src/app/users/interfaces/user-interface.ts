export interface Iuser {
  name: string;
  id: number;
  email: string;
  phone: string;
  username: string;
  website: string;
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}


// address:
  // city: "Gwenborough"
  // geo: {lat: "-37.3159", lng: "81.1496"}
  // street: "Kulas Light"
  // suite: "Apt. 556"
  // zipcode: "92998-3874"
  // __proto__: Object
// company: {name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets"}
// email: "Sincere@april.biz"
// id: 1
// name: "Leanne Graham"
// phone: "1-770-736-8031 x56442"
// username: "Bret"
// website: "hildegard.org"
