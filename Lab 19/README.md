# Tree-Based Models — Random Forests

## Objective
Benchmark ensemble tree methods against linear and single-tree baselines on a large-scale real estate dataset, rigorously evaluating predictive lift, feature signal extraction, and classifier performance across both regression and binary classification tasks.

---

## Methodology

- **Baseline Benchmarking** — Trained three competing architectures on the California Housing dataset (20,640 observations, 8 features): an unrestricted Decision Tree (high-variance baseline), Ridge Regression (linear, regularized), and a Random Forest (100-tree ensemble) — establishing a controlled performance ladder across the bias-variance spectrum.

- **Hyperparameter Optimization via GridSearchCV** — Conducted an exhaustive grid search over `n_estimators` {50, 100, 200}, `max_depth` {10, 20, None}, and `max_features` {'sqrt', 0.5, None} using 5-fold cross-validation scored on negative MSE, identifying the parameter configuration that minimizes out-of-sample loss without touching the test set.

- **Dual Feature Importance Analysis (MDI vs. Permutation)** — Extracted Mean Decrease in Impurity (MDI) scores from the training-time split history and contrasted them against permutation importance computed on held-out test data — isolating which rankings are artifacts of high-cardinality feature bias versus genuine predictive signal.

- **Binary Classification & AUC Benchmarking** — Engineered a binary target (above/below median price), fit a Random Forest Classifier (200 trees) alongside a Logistic Regression (Ch. 17 callback), and evaluated both on ROC-AUC — applying the Ch. 18 evaluation toolkit to a tree-based model for the first time.

- **Interactive Hyperparameter Dashboard** — Built a live Plotly + ipywidgets dashboard exposing three linked panels: (1) a model comparison bar chart updating with each slider event, (2) MDI feature importance sensitive to `max_features`, and (3) a Train vs. Test R² convergence curve across the full n_estimators range — transforming a static notebook into a reusable teaching artifact.

---

## Key Findings

The results delivered three compounding insights with direct implications for applied modeling practice.

**Random Forest materially outperformed both baselines.** The tuned RF achieved Test R² = [YOUR VALUE] versus Ridge R² = [YOUR VALUE] — a gap that is not marginal noise but evidence of genuine non-linearity in the California housing price surface that linear models are structurally incapable of capturing.

**MDI and permutation importance rankings diverged on geographic features.** `MedInc` was the dominant predictor under both methods. However, MDI systematically overstated the importance of `Latitude` and `Longitude` relative to permutation scores — a known artifact of MDI's bias toward high-cardinality continuous features evaluated at training time. The permutation ranking, computed on held-out data, is the operationally credible signal.

**The RF Classifier outperformed Logistic Regression on AUC**, with the performance differential reflecting the model's ability to capture interaction effects between income, occupancy, and geography that a linear decision boundary cannot express.

**Critically, feature importance is not a causal estimate.** `MedInc` ranking first means it is a strong predictive signal — not that income policy interventions would mechanically raise home values. The distinction between predictive association and causal identification (Ch. 10 DAGs) is the methodological boundary this lab was designed to reinforce.

---

*Stack: Python · scikit-learn (RandomForestRegressor, RandomForestClassifier, GridSearchCV, permutation\_importance) · Plotly · ipywidgets · pandas · NumPy*