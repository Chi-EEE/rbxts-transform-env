// @rbxts-transform-env debug:print_file
import { $env as _env } from "../../..";

export const NODE_ENV = _env.string("NODE_ENV", "development");
export const ANOTHER_VAR = _env.string("TEST2", "NOPE");
export const IS_DEV = NODE_ENV === "development";

if (_env.boolean("FALSY", true)) {
	const TEST_ENV = _env.number("TEST");
	const IS_TEST = TEST_ENV === 20;
}

if (_env.boolean("ANALYTICS_API_URL")) {
	const ANALYTICS_API_URL = _env.string("ANALYTICS_API_URL")!;
	const ANALYTICS_API_PORT = _env.number("ANALYTICS_API_PORT", 3000);
	const USE_HTTPS = _env.boolean("ANALYTICS_USE_HTTPS", true);

	const URI = `${USE_HTTPS ? "https" : "http"}://${ANALYTICS_API_URL}:${ANALYTICS_API_PORT}`;
	print("Our analytics URI is: ", URI);
}

export const DefaultValue = _env.number("DEFAULT_VALUE", 0.05);
export const DefaultString = _env.string("DEFAULT_STR");

// $env.expectString("TEST", "A 'TEST' variable is required in your environment.");

const test: number = DefaultValue;