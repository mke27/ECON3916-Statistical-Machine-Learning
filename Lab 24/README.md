# Causal ML — Double Machine Learning for 401(k) Policy Evaluation

## Objective
Apply Double Machine Learning to isolate the causal effect of 401(k) plan eligibility on household net financial assets, correcting for the regularization bias that arises when standard penalized regression is used naively for causal inference.

## Methodology
- Simulated a high-dimensional DGP with a known treatment effect (TRUE_ATE = 5.0) to demonstrate that naive LASSO shrinks the treatment coefficient toward zero — regularization bias — because the penalty cannot distinguish the causal variable of interest from nuisance covariates
- Loaded the Chernozhukov & Hansen 401(k) dataset via `doubleml.datasets.fetch_401K` and documented pre-treatment imbalance between eligible and ineligible households (higher income and education in the treated group), motivating the need for a doubly-robust estimator
- Constructed a `DoubleMLData` object with net total financial assets (`net_tfa`) as the outcome, 401(k) eligibility (`e401`) as the treatment, and all remaining demographic and financial variables as covariates
- Fit a Partially Linear Regression (PLR) model using Random Forest nuisance learners (`n_estimators=200`, `max_depth=5`) for both the outcome and propensity equations, with 5-fold cross-fitting to avoid overfitting bias in the moment conditions
- Estimated the population Average Treatment Effect (ATE) with a 95% confidence interval and assessed statistical significance
- Conducted Conditional ATE (CATE) analysis by splitting the sample into income quartiles and fitting separate DML models per subgroup to detect treatment effect heterogeneity across the income distribution
- Visualized subgroup ATEs with error bars representing 95% confidence intervals
- Performed sensitivity analysis using `sensitivity_analysis(cf_y=0.03, cf_d=0.03)` to quantify how strong an unmeasured confounder (e.g., financial literacy) would need to be to invalidate the estimate

## Key Findings
- *[Fill in: what was the overall ATE — roughly how many dollars did 401(k) eligibility increase net financial assets?]*
- *[Fill in: how did the effect vary across income quartiles — did higher-income households see larger or smaller effects?]*
- *[Fill in: what was the robustness value from the sensitivity analysis, and what does it imply about the credibility of the estimate?]*

## Tools & Libraries
`Python` · `doubleml` · `scikit-learn` · `pandas` · `numpy` · `matplotlib`