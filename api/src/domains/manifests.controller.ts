import path from "path";
import fs from "fs";
import fg from "fast-glob";
import httpStatus from "http-status";
import { Controller, Route, Get, SuccessResponse } from "tsoa";

type MicrofrontendManifest = {
  scope: string;
  module: string;
  entry: string;
  slots: {
    [name: string]: Record<string, any>[];
  };
  createdOn: string;
  manifestId: string;
};

@Route("/")
export class ManifestsController extends Controller {
  @SuccessResponse(httpStatus.OK)
  @Get()
  public async getManifests(): Promise<Omit<MicrofrontendManifest, "auth">[]> {
    const files = await fg("../../../mf-*/public/microfrontend-manifest.json", {
      cwd: path.resolve(__dirname),
    });
    const manifests = files
      .map((file) => fs.readFileSync(path.join(__dirname, file), "utf8"))
      .map((content) => JSON.parse(content));
    return manifests;
  }
}
