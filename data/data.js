import axios from "axios";
import Avatar from "../avatar/avatar";

class Data {
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

  async loadHolon(
    data = {
      providerType: "Default",
      setGlobally: true,
      autoFailOverMode: "DEFAULT",
      autoReplicationMode: "DEFAULT",
      autoLoadBalanceMode: "DEFAULT",
      autoFailOverProviders: "DEFAULT",
      autoReplicationProviders: "DEFAULT",
      autoLoadBalanceProviders: "DEFAULT",
      waitForAutoReplicationResult: false,
      showDetailedSettings: true,
      recursive: true,
      maxChildDepth: 0,
      continueOnError: true,
      version: 0,
      loadChildren: true,
      id: null,
    }
  ) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    if (typeof data === "string") {
      const config = {
        method: "get",
        url: `https://api.oasisplatform.world/api/data/load-holon/${data}`,
        headers: {
          Authorization: `Bearer ${this.token.jwtToken}`,
        },
      };

      return this._returnState(config);
    } else if (typeof data === "object") {
      const config = {
        method: "post",
        url: `https://api.oasisplatform.world/api/data/load-holon`,
        headers: {
          Authorization: `Bearer ${this.token.jwtToken}`,
        },
        data: JSON.stringify(data),
      };

      return this._returnState(config);
    }
  }

  async loadAllHolons(
    data = {
      providerType: "Default",
      setGlobally: true,
      autoFailOverMode: "DEFAULT",
      autoReplicationMode: "DEFAULT",
      autoLoadBalanceMode: "DEFAULT",
      autoFailOverProviders: "DEFAULT",
      autoReplicationProviders: "DEFAULT",
      autoLoadBalanceProviders: "DEFAULT",
      waitForAutoReplicationResult: false,
      showDetailedSettings: true,
      recursive: true,
      maxChildDepth: 0,
      continueOnError: true,
      version: 0,
      loadChildren: true,
      id: null,
    }
  ) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };

    if (data === undefined) {
      const config = {
        method: "get",
        url: `https://api.oasisplatform.world/api/data/load-all-holons/all`,
        headers: {
          Authorization: `Bearer ${this.token.jwtToken}`,
        },
      };

      return this._returnState(config);
    } else if (typeof data === "object") {
      const config = {
        method: "post",
        url: `https://api.oasisplatform.world/api/data/load-all-holons`,
        headers: {
          Authorization: `Bearer ${this.token.jwtToken}`,
        },
        data: JSON.stringify(data),
      };

      return this._returnState(config);
    } else if (typeof data === "string") {
      const config = {
        method: "get",
        url: `https://api.oasisplatform.world/api/data/load-all-holons/${data}`,
        headers: {
          Authorization: `Bearer ${this.token.jwtToken}`,
        },
      };

      return this._returnState(config);
    }
  }

  async loadHolonsForParent(
    data = {
      providerType: "Default",
      setGlobally: true,
      autoFailOverMode: "DEFAULT",
      autoReplicationMode: "DEFAULT",
      autoLoadBalanceMode: "DEFAULT",
      autoFailOverProviders: "DEFAULT",
      autoReplicationProviders: "DEFAULT",
      autoLoadBalanceProviders: "DEFAULT",
      waitForAutoReplicationResult: false,
      showDetailedSettings: true,
      recursive: true,
      maxChildDepth: 0,
      continueOnError: true,
      version: 0,
      loadChildren: true,
      id: null,
    }
  ) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    if (typeof data === "string") {
      const config = {
        method: "get",
        url: `https://api.oasisplatform.world/api/data/load-holons-for-parent/${data}`,
        headers: {
          Authorization: `Bearer ${this.token.jwtToken}`,
        },
      };

      return this._returnState(config);
    } else if (typeof data === "object") {
      const config = {
        method: "post",
        url: `https://api.oasisplatform.world/api/data/load-holons-for-parent`,
        headers: {
          Authorization: `Bearer ${this.token.jwtToken}`,
        },
        data: JSON.stringify(data),
      };

      return this._returnState(config);
    }
  }

  async saveHolon(data) {
    data = JSON.stringify(data);
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "post",
      url: `https://api.oasisplatform.world/api/data/save-holon`,
      headers: {
        Authorization: `Bearer ${this.token.jwtToken}`,
      },
      data,
    };

    return this._returnState(config);
  }

  async saveHolonOffChain(data) {
    data = JSON.stringify(data);
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "post",
      url: `https://api.oasisplatform.world/api/data/save-holon-off-chain`,
      headers: {
        Authorization: `Bearer ${this.token.jwtToken}`,
      },
      data,
    };

    return this._returnState(config);
  }

  async deleteHolon(
    data = {
      id: "",
      softDelete: true,
    }
  ) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "delete",
      url: `https://api.oasisplatform.world/api/data/delete-holon/${data.id}/${data.softDelete}`,
      headers: {
        Authorization: `Bearer ${this.token.jwtToken}`,
      },
    };

    return this._returnState(config);
  }
}

export default Data;
