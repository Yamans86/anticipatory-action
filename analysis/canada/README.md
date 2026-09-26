# AA-EXP-CA-002 input contract

The executable experiment accepts a JSON array with one row per contiguous month:

```json
[
  {
    "date": "2022-01",
    "recentImmigrantUnemploymentRate": 8.4,
    "helcEmploymentIndex": 100.0
  }
]
```

## Field definitions

- `date`: calendar month in `YYYY-MM` format.
- `recentImmigrantUnemploymentRate`: the pre-specified recent-immigrant unemployment rate, in percentage points, sourced from the versioned Statistics Canada extract.
- `helcEmploymentIndex`: a positive index of employment in high-exposure/low-complementarity occupations, constructed from the approved exposure crosswalk and occupational employment source.

The script rejects missing months rather than silently interpolating them. It does not fetch live data. A real run must use a pinned, checksummed input artifact so the result can be reproduced later.

Run:

```sh
node analysis/canada/exp-ca-002.js path/to/prepared-series.json
```

The primary comparison is rolling-origin out-of-sample error for a baseline model using recent-immigrant unemployment momentum versus an expanded model that also includes HELC employment cooling. The script prevents target leakage by training only on observations whose future outcome would have been known at each forecast origin.
