# Architecting the Prediction Engine

## Objective
Engineer a multivariate OLS regression system trained on cross-sectional real estate market data to generate property valuations and quantify out-of-sample predictive performance via loss minimization.

---

## Methodology

- **Data Acquisition & Scoping** — Ingested the Zillow ZHVI 2026 Micro Dataset, a cross-sectional snapshot of live U.S. real estate market conditions, and scoped the feature space for predictive signal.
- **Feature Engineering & Model Specification** — Constructed a multivariate design matrix using the Patsy Formula API (`statsmodels`), encoding economic covariates as predictors of property valuation.
- **OLS Estimation** — Fit an Ordinary Least Squares regression engine to the training data, estimating the coefficient vector that minimizes the sum of squared residuals across the feature space.
- **Out-of-Sample Evaluation** — Partitioned the dataset into training and test sets to assess generalization performance on unseen observations, moving beyond in-sample fit statistics.
- **Loss Quantification (RMSE in USD)** — Computed Root Mean Squared Error denominated in actual U.S. Dollars, translating abstract statistical loss into a concrete, interpretable financial error margin.

---

## Key Findings

Successfully transitioned the modeling framework from classical inferential explanation to **predictive engineering** — optimizing for forecast accuracy rather than coefficient interpretation alone.

The model's RMSE, expressed in USD, established a precise financial error margin, enabling direct assessment of **algorithmic business risk**: a practitioner can now state, in dollar terms, how far the engine's valuations are expected to deviate from realized market prices on unseen properties.

This reframing — from *"what drives prices?"* to *"how accurately can we price?"* — marks the core methodological shift of this lab, and positions the OLS engine as an operational forecasting tool rather than a descriptive statistical model.

---

*Stack: Python · pandas · NumPy · statsmodels (Patsy Formula API)*
