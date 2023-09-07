import { test } from "uvu";
import * as assert from "uvu/assert";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import utc from "dayjs/plugin/utc.js";
import lunar from "./index.js";

dayjs.extend(customParseFormat);
dayjs.extend(lunar);
dayjs.extend(utc);

const f = "DD/MM/YYYY";

test("dayjs - lunar - 01", () => {
	assert.is(
		dayjs("25/12/1995", f).utcOffset(7).toLunar().format(f),
		"04/11/1995",
	);
});

test("dayjs - lunar - 02", () => {
	assert.is(
		dayjs("04/06/2008", f).utcOffset(7).toLunar().format(f),
		"01/05/2008",
	);
});

test("dayjs - lunar - 03", () => {
	assert.is(
		dayjs("14/01/2012", f).utcOffset(7).toLunar().format(f),
		"21/12/2011",
	);
});

test.run();
