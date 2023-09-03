import { Container } from "@owja/ioc";

declare module "@owja/ioc" {
  interface Container {
    register<TService>(
      key: symbol
    ): ReturnType<typeof Container.prototype.bind<TService>>;
  }
}

const registeredKeys: symbol[] = [];

Container.prototype.register = function <TService>(key: symbol) {
  const binder = registeredKeys.includes(key)
    ? this.rebind<TService>(key)
    : this.bind<TService>(key);
  if (!registeredKeys.includes(key)) {
    registeredKeys.push(key);
  }
  return binder;
};

export const ioc = new Container();

export default ioc;

import { IocContainer } from "@tsoa/runtime";

const symbols = {} as Record<string, symbol>;

export const iocContainer: IocContainer = {
  get<T>(controller: any): T {
    const name = controller.name;
    const symbol = (symbols[name] = symbols[name] || Symbol(name));
    ioc.register<T>(symbol).to(controller);
    return ioc.get<T>(symbol);
  },
};
