import { add } from "../../build/optimized.wasm";

export const WasmModel = {
  modelName: "wasmmodel",
  endpoint: "wasmmodels",
  factory: dependencies => console.log("wasm output", add(1, 2), dependencies),
};
