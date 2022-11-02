import axios from "axios";
import Avatar from "../avatar/avatar";

class Solana {
  constructor() {
    this.avatar = new Avatar();
  }

  _returnState(config) {
    return axios(config)
      .then(function (response) {
        if (response.data.isError) return { error: true, data: response.data };
        else return { error: false, data: response.data };
      })
      .catch(function (error) {
        return { error: true, data: error };
      });
  }

  async mint(data) {
    data = JSON.stringify(data);
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "post",
      url: `https://api.oasisplatform.world/api/Solana/Mint`,
      headers: {
        Authorization: `Bearer ${this.token.jwtToken}`,
      },
      data,
    };

    return this._returnState(config)
  }

  async exchange(
    data = {
      fromAccount: {
        publicKey: "",
      },
      toAccount: {
        publicKey: "",
      },
      memoText: "",
      amount: 0,
      mintAccount: {
        publicKey: "",
      },
    }
  ) {
    data = JSON.stringify(data);
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "post",
      url: `https://api.oasisplatform.world/api/Solana/Exchange`,
      headers: {
        Authorization: `Bearer ${this.token.jwtToken}`,
      },
      data,
    };

    return this._returnState(config)
  }
}

export default Solana;
