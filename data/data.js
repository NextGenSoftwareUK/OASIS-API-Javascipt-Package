import axios from "axios";
import Avatar from "../avatar/avatar";

class Data {
  constructor() {
    this.avatar = new Avatar();
  }

  async loadHolon(
    data = {
      id: "188e0e27-3af2-478f-af86-030c56a42edb",
      LoadChildren: false,
      Recursive: false,
      MaxChildDepth: 1,
      ContinueOnError: false,
      Version: 1,
      ProviderType: "HoloOASIS",
      SetGlobally: false,
      ShowDetailedSettings: true,
      AutoFailOverEnabled: "true",
      AutoReplicationEnabled: "false",
      AutoLoadBalanceEnabled: "false",
      AutoFailOverProviders: "MongoDBOASIS, HoloOASIS",
      AutoReplicationProviders: "MongoDBOASIS, HoloOASIS",
      AutoLoadBalanceProviders: "MongoDBOASIS, HoloOASIS",
      WaitForAutoReplicationResult: false,
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

      return axios(config)
        .then(function (response) {
          if (response.data.isError)
            return { error: true, data: response.data };
          else return { error: false, data: response.data };
        })
        .catch(function (error) {
          return { error: true, data: error };
        });
    }
    const config = {
      method: "post",
      url: `https://api.oasisplatform.world/api/data/load-holon`,
      headers: {
        Authorization: `Bearer ${this.token.jwtToken}`,
      },
      data: JSON.stringify(data),
    };

    return axios(config)
      .then(function (response) {
        if (response.data.isError) return { error: true, data: response.data };
        else return { error: false, data: response.data };
      })
      .catch(function (error) {
        return { error: true, data: error };
      });
  }

  async loadAllHolons(
    data = {
      HolonType: "Moon",
      LoadChildren: true,
      Recursive: true,
      MaxChildDepth: 0,
      ContinueOnError: false,
      Version: 0,
      ProviderType: "HoloOASIS",
      SetGlobally: false,
      ShowDetailedSettings: true,
      AutoFailOverEnabled: "true",
      AutoReplicationEnabled: "true",
      AutoLoadBalanceEnabled: "true",
      AutoFailOverProviders: "MongoDBOASIS, HoloOASOS",
      AutoReplicationProviders: "MongoDBOASIS, HoloOASOS",
      AutoLoadBalanceProviders: "MongoDBOASIS, HoloOASOS",
      WaitForAutoReplicationResult: false,
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

      return axios(config)
        .then(function (response) {
          if (response.data.isError)
            return { error: true, data: response.data };
          else return { error: false, data: response.data };
        })
        .catch(function (error) {
          return { error: true, data: error };
        });
    }

    const config = {
      method: "post",
      url: `https://api.oasisplatform.world/api/data/load-all-holons/${holonType}`,
      headers: {
        Authorization: `Bearer ${this.token.jwtToken}`,
      },
      data: JSON.stringify(data),
    };

    return axios(config)
      .then(function (response) {
        if (response.data.isError) return { error: true, data: response.data };
        else return { error: false, data: response.data };
      })
      .catch(function (error) {
        return { error: true, data: error };
      });
  }

  async loadHolonParent(
    data = {
      Id: "89a935f4-d0ad-44af-b954-558041a76c18",
      HolonType: "Moon",
      LoadChildren: true,
      Recursive: true,
      MaxChildDepth: 0,
      ContinueOnError: false,
      Version: 0,
      ProviderType: "HoloOASIS",
      SetGlobally: false,
      ShowDetailedSettings: true,
      AutoFailOverEnabled: "true",
      AutoReplicationEnabled: "true",
      AutoLoadBalanceEnabled: "true",
      AutoFailOverProviders: "MongoDBOASIS, HoloOASOS",
      AutoReplicationProviders: "MongoDBOASIS, HoloOASOS",
      AutoLoadBalanceProviders: "MongoDBOASIS, HoloOASOS",
      WaitForAutoReplicationResult: false,
    }
  ) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    if (typeof data === "string") {
      const config = {
        method: "get",
        url: `https://api.oasisplatform.world/api/data/load-holons-for-parent/${data}/all`,
        headers: {
          Authorization: `Bearer ${this.token.jwtToken}`,
        },
      };

      return axios(config)
        .then(function (response) {
          if (response.data.isError)
            return { error: true, data: response.data };
          else return { error: false, data: response.data };
        })
        .catch(function (error) {
          return { error: true, data: error };
        });
    }
    const config = {
      method: "post",
      url: `https://api.oasisplatform.world/api/data/load-holons-for-parent`,
      headers: {
        Authorization: `Bearer ${this.token.jwtToken}`,
      },
      data: JSON.stringify(data),
    };

    return axios(config)
      .then(function (response) {
        if (response.data.isError) return { error: true, data: response.data };
        else return { error: false, data: response.data };
      })
      .catch(function (error) {
        return { error: true, data: error };
      });
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

    return axios(config)
      .then(function (response) {
        if (response.data.isError) return { error: true, data: response.data };
        else return { error: false, data: response.data };
      })
      .catch(function (error) {
        return { error: true, data: error };
      });
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

    return axios(config)
      .then(function (response) {
        if (response.data.isError) return { error: true, data: response.data };
        else return { error: false, data: response.data };
      })
      .catch(function (error) {
        return { error: true, data: error };
      });
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

    return axios(config)
      .then(function (response) {
        if (response.data.isError) return { error: true, data: response.data };
        else return { error: false, data: response.data };
      })
      .catch(function (error) {
        return { error: true, data: error };
      });
  }
}

export default Data;
