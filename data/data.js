import axios from "axios";
import Avatar from "../avatar/avatar";

class Data {
  constructor() {
    this.avatar = new Avatar();
  }

  async loadHolon(data) {
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

  async getLoadHolonById(id = "") {
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

  async getHolonChildById(
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

  async getHolonChildByIdAndSetGlobally(
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

  async getHolonChildByIdAndSetGloballyWithMoreOptions(
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

  async getLoadHolonById(id = "") {
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

  async loadAllHolons(data) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "post",
      url: `https://api.oasisplatform.world/api/data/load-all-holons`,
      headers: {
        Authorization: `Bearer ${this.token.jwtToken}`,
      },
      data: JSON.stringify(data)
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

  async loadAllHolonsForGivenType(holonType) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "get",
      url: `https://api.oasisplatform.world/api/data/load-all-holons/${holonType}`,
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

  async getHolonChildByHolonType(
    data = {
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
      url: `https://api.oasisplatform.world/api/data/load-holon/${data.holonType}/${data.loadChildren}/${data.recursive}/${data.maxChildDepth}/${data.continueOnError}/${data.version}`,
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

  async getHolonChildByHolonTypeAndSetGlobally(
    data = {
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
      url: `https://api.oasisplatform.world/api/data/load-holon/${data.holonType}/${data.loadChildren}/${data.recursive}/${data.maxChildDepth}/${data.continueOnError}/${data.version}/${data.providerType}/${data.setGlobally}`,
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

  async getHolonChildByHolonTypeAndSetGloballyWithMoreOptions(
    data = {
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
      url: `https://api.oasisplatform.world/api/data/load-holon/${data.holonType}/${data.loadChildren}/${data.recursive}/${data.maxChildDepth}/${data.continueOnError}/${data.version}/${data.providerType}/${data.setGlobally}/${data.autoReplicationMode}/${data.autoFailOverMode}/${data.autoLoadBalanceMode}/${data.autoReplicationProviders}/${data.autoFailOverProviders}/${data.autoLoadBalanceProviders}/${data.waitForAutoReplicationResult}/${data.showDetailedSetting}`,
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

  async loadHolonForParent(data) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "post",
      url: `https://api.oasisplatform.world/api/data/load-holons-for-parent`,
      headers: {
        Authorization: `Bearer ${this.token.jwtToken}`,
      },
      data: JSON.stringify(data)
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

  async getLoadHolonParentByIdAndType(data={
    id: "",
    holonType: ""
  }) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "get",
      url: `https://api.oasisplatform.world/api/data/load-holons-for-parent/${data.id}/${data.holonType}`,
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

  async getHolonParent(
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

  async getHolonParentAndSetGlobally(
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

  async getHolonParenteAndSetGloballyWithMoreOptions(
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

  async saveHolonByObj(holon="", data) {
    data = JSON.stringify(data);
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    const config = {
      method: "post",
      url: `https://api.oasisplatform.world/api/data/save-holon/${holon}`,
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

  async saveHolonWithParams(
    params = {
      saveChildren: true,
      recursive: true,
      maxChildDepth: 0,
      continueOnError: true,
    }, data
  ) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
      data = JSON.stringify(data);
    const config = {
      method: "post",
      url: `https://api.oasisplatform.world/api/data/save-holon/${params.saveChildren}/${params.recursive}/${params.maxChildDepth}/${params.continueOnError}`,
      headers: {
        Authorization: `Bearer ${this.token.jwtToken}`,
      },
      data
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

  async saveHolonAndSetGlobally(
    params = {
      saveChildren: true,
      recursive: true,
      maxChildDepth: 0,
      continueOnError: true,
      providerType: "",
      setGlobally: true,
    }, data
  ) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    data = JSON.stringify(data);
    const config = {
      method: "post",
      url: `https://api.oasisplatform.world/api/data/save-holon/${params.saveChildren}/${params.recursive}/${params.maxChildDepth}/${params.continueOnError}/${params.providerType}/${params.setGlobally}`,
      headers: {
        Authorization: `Bearer ${this.token.jwtToken}`,
      },
      data
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

  async saveHolonAndSetGloballyWithMoreOptions(
    params = {
      saveChildren: true,
      recursive: true,
      maxChildDepth: 0,
      continueOnError: true,
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
    }, data
  ) {
    this.token = await this.avatar.callLogin();
    if (this.token === -1)
      return { error: true, data: { message: "You are not logged in!" } };
    data = JSON.stringify(data);
    const config = {
      method: "post",
      url: `https://api.oasisplatform.world/api/data/save-holon/${params.loadChildren}/${params.recursive}/${params.maxChildDepth}/${params.continueOnError}/${params.providerType}/${params.setGlobally}/${params.autoReplicationMode}/${params.autoFailOverMode}/${params.autoLoadBalanceMode}/${params.autoReplicationProviders}/${params.autoFailOverProviders}/${params.autoLoadBalanceProviders}/${params.waitForAutoReplicationResult}/${params.showDetailedSetting}`,
      headers: {
        Authorization: `Bearer ${this.token.jwtToken}`,
      },
      data
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

  async deleteHolon(data={
    id: "",
    softDelete: true
  }) {
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
