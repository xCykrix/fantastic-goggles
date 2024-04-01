
import { Resource } from "https://esm.sh/v135/@drashland/drash@3.0.0-beta.2/modules/chains/RequestChain/mod.native.js";
import { Chain } from "https://esm.sh/v135/@drashland/drash@3.0.0-beta.2/modules/chains/RequestChain/mod.native.js";
import { RequestValidator } from "https://esm.sh/v135/@drashland/drash@3.0.0-beta.2/standard/handlers/RequestValidator.js";
import { Builder } from "https://esm.sh/v135/@drashland/drash@3.0.0-beta.2/standard/http/ResourceGroup.js";

export class Chains {
  private static chain: RequestValidator;
  private static builder = Chain.builder();
  private static resources: Resource[] = [];

  public static hone(): Builder {
    return Resource.group();
  }

  public static add(...builders: Builder[]): void {
    for (const builder of builders) {
      this.builder.resources(builder.build());
    }
  }

  public static finalize(): void {
    this.chain = this.builder.build();
  }

  public static get(): RequestValidator {
    return this.chain;
  }
}