import axios from "axios";
import Avatar from "../avatar/avatar";

class Data {
  constructor() {
    this.avatar = new Avatar();
  }

  async loadHolon(
    data = {
      providerType: "Ut ut",
      setGlobally: false,
      autoFailOverMode: "minim est",
      autoReplicationMode: "in occaecat aliquip Ut",
      autoLoadBalanceMode: "sit proident aute commodo",
      autoFailOverProviders: "ex minim",
      autoReplicationProviders: "in ut esse minim",
      autoLoadBalanceProviders: "aute laborum aliqua",
      waitForAutoReplicationResult: true,
      showDetailedSettings: true,
      recursive: true,
      maxChildDepth: 34597336,
      continueOnError: false,
      version: 98949762,
      loadChildren: true,
      id: "7a88d429-6a1c-4c20-f5f4-f426c17fc40f",
    }
  ) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
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

  async loadHolonById(id) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "get",
      url: `https://api.oasisplatform.world/api/data/load-holon/${id}`,
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

  async loadHolonQs(
    data = {
      id: "",
      loadChildren: true,
      recursive: true,
      maxChildDepth: 0,
      continueOnError: true,
      version: 0,
    }
  ) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "get",
      url: `https://api.oasisplatform.world/api/data/load-holon/${data.id}/${data.loadChildren}/${data.recursive}/${data.maxChildDepth}/${data.continueOnError}/${data.version}`,
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

  async loadHolonQs2(
    data = {
      id: "",
      loadChildren: true,
      recursive: true,
      maxChildDepth: 0,
      continueOnError: true,
      version: 0,
      providerType: "",
      setGlobally: true,
    }
  ) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "get",
      url: `https://api.oasisplatform.world/api/data/load-holon/${data.id}/${data.loadChildren}/${data.recursive}/${data.maxChildDepth}/${data.continueOnError}/${data.version}/${data.providerType}/${data.setGlobally}`,
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

  async loadHolonQs3(
    data = {
      id: "",
      loadChildren: true,
      recursive: true,
      maxChildDepth: 0,
      continueOnError: true,
      version: 0,
      providerType: "",
      setGlobally: true,
      autoReplicationMode: "",
      autoFailOverMode: "",
      autoLoadBalanceMode: "",
      autoReplicationProviders: "",
      autoFailOverProviders: "",
      autoLoadBalanceProviders: "",
      waitForAutoReplicationResult: "",
      showDetailedSetting: "",
    }
  ) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "get",
      url: `https://api.oasisplatform.world/api/data/load-holon/${data.id}/${data.loadChildren}/${data.recursive}/${data.maxChildDepth}/${data.continueOnError}/${data.version}/${data.providerType}/${data.setGlobally}/${data.autoReplicationMode}/${data.autoFailOverMode}/${data.autoLoadBalanceMode}/${data.autoReplicationProviders}/${data.autoFailOverProviders}/${data.autoLoadBalanceProviders}/${data.waitForAutoReplicationResult}/${data.showDetailedSetting}`,
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

  // async getLoadHolonById(id = "") {
  //   this.token = await this.avatar.callLogin();
  //   if (this.token === -1)
  //     return { error: true, data: { message: "You are not logged in!" } };
  //   const config = {
  //     method: "get",
  //     url: `https://api.oasisplatform.world/api/data/load-holon/${id}`,
  //     headers: {
  //       Authorization: `Bearer ${this.token.jwtToken}`,
  //     },
  //   };

  //   return axios(config)
  //     .then(function (response) {
  //       if (response.data.isError) return { error: true, data: response.data };
  //       else return { error: false, data: response.data };
  //     })
  //     .catch(function (error) {
  //       return { error: true, data: error };
  //     });
  // }

  async loadAllHolons() {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "post",
      url: `https://api.oasisplatform.world/api/data/load-all-holons/all`,
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

  async loadAllHolonsForm(
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

  async loadHolonsParent(id) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "get",
      url: `https://api.oasisplatform.world/api/data/load-holons-for-parent/${id}/all`,
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

  async loadHolonParentForm(
    data = {
      Id: null,
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
    if (data.id == null)
      return { error: true, data: { message: "id is null" } };
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
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


  async loadHolonParentQs1(
    data = {
      id: "",
      holonType: "",
      loadChildren: true,
      recursive: true,
      maxChildDepth: 0,
      continueOnError: true,
      version: 0,
    }
  ) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "get",
      url: `https://api.oasisplatform.world/api/data/load-holons-for-parent/${data.id}/${data.holonType}/${data.loadChildren}/${data.recursive}/${data.maxChildDepth}/${data.continueOnError}/${data.version}`,
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

  async loadHolonParentQs2(
    data = {
      id: "",
      holonType: "",
      loadChildren: true,
      recursive: true,
      maxChildDepth: 0,
      continueOnError: true,
      version: 0,
      providerType: "",
      setGlobally: true,
    }
  ) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "get",
      url: `https://api.oasisplatform.world/api/data/load-holons-for-parent/${data.id}/${data.holonType}/${data.loadChildren}/${data.recursive}/${data.maxChildDepth}/${data.continueOnError}/${data.version}/${data.providerType}/${data.setGlobally}`,
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

  async loadHolonParentQs3(
    data = {
      id: "",
      holonType: "",
      loadChildren: true,
      recursive: true,
      maxChildDepth: 0,
      continueOnError: true,
      version: 0,
      providerType: "",
      setGlobally: true,
      autoReplicationMode: "",
      autoFailOverMode: "",
      autoLoadBalanceMode: "",
      autoReplicationProviders: "",
      autoFailOverProviders: "",
      autoLoadBalanceProviders: "",
      waitForAutoReplicationResult: "",
      showDetailedSetting: "",
    }
  ) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "get",
      url: `https://api.oasisplatform.world/api/data/load-holons-for-parent/${data.id}/${data.holonType}/${data.loadChildren}/${data.recursive}/${data.maxChildDepth}/${data.continueOnError}/${data.version}/${data.providerType}/${data.setGlobally}/${data.autoReplicationMode}/${data.autoFailOverMode}/${data.autoLoadBalanceMode}/${data.autoReplicationProviders}/${data.autoFailOverProviders}/${data.autoLoadBalanceProviders}/${data.waitForAutoReplicationResult}/${data.showDetailedSetting}`,
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
