# The Polynomial Trap: Bias-Variance Tradeoff

## Portfolio Summary

This lab operationalizes one of the most consequential principles in predictive modeling: the bias-variance tradeoff. Using two distinct datasets — a synthetic sine-wave (50 training, 200 test observations) and the Ames Housing dataset (1,460 observations, 80 features) — I engineered a controlled experimental framework to isolate how model complexity drives the transition from underfitting to overfitting.

Across polynomial degrees 1 through 15, complexity curves revealed that degrees 3–5 minimized out-of-sample RMSE on the synthetic target, with higher-degree models producing erratic extrapolation despite near-zero training error. Critically, a 5-fold cross-validation routine — implemented both manually and via scikit-learn — selected the same optimal degree as the true held-out test set, validating CV as a reliable proxy for generalization performance without touching test data.

On the Ames Housing dataset, a parsimonious 5-feature model selected by correlation screening outperformed the full 36-feature kitchen-sink specification on CV RMSE — a direct demonstration that model complexity without regularization inflates variance and degrades real-world forecast accuracy.

**Key takeaway:** Predictive performance is not a function of model size. It is a function of the signal-to-noise ratio your feature set captures relative to the irreducible noise floor.

---

*Stack: Python · NumPy · scikit-learn (PolynomialFeatures, LinearRegression, cross\_val\_score) · Matplotlib*
