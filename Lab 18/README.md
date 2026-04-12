# Fraud Detection Model Evaluation — Metrics that Matter

## Objective
Rigorously evaluate a logistic regression fraud classifier on a severely class-imbalanced dataset by moving beyond accuracy to operational metrics — Precision, Recall, F1-Score, ROC-AUC, and PR-AUC — and translating statistical thresholds into a business-constrained decision rule.

---

## Methodology

- **Dataset Scoping & Imbalance Audit** — Ingested the Kaggle Credit Card Fraud Detection dataset (284,807 real-world European transactions), quantified the class imbalance at 0.172% positive (fraud) rate, and established this as the foundational constraint governing all subsequent evaluation design.

- **Accuracy Paradox Demonstration** — Constructed a naive majority-class baseline to expose the accuracy paradox: a model predicting "no fraud" on every observation achieves 99.83% accuracy while detecting zero fraudulent transactions — rendering accuracy a meaningless loss function in this domain.

- **Logistic Regression Classifier** — Trained a logistic regression model on PCA-anonymized features V1–V28 plus transaction Amount, and generated predicted probabilities for downstream threshold analysis.

- **Confusion Matrix & Classification Report** — Evaluated model performance at the default 0.5 decision threshold using a confusion matrix and full classification report (Precision, Recall, F1-Score per class), establishing a performance baseline on the minority class.

- **ROC & Precision-Recall Curve Analysis** — Computed the full ROC curve with AUC score to assess rank-ordering ability across all thresholds; constructed the Precision-Recall curve and PR-AUC to specifically measure classifier performance on the fraud class under imbalance — a more diagnostic metric than ROC in this regime.

- **F1-Optimal Threshold Selection** — Swept the decision threshold across the probability range, computing F1-Score at each cutoff to identify the threshold that maximizes the harmonic mean of Precision and Recall — demonstrating that the default 0.5 threshold is rarely optimal for imbalanced fraud detection.

- **Business-Constrained Operating Point** — Applied a real-world capacity constraint of 500 maximum daily fraud investigations to select a deployment-ready operating threshold, translating model output into an actionable, operationally feasible decision rule.

---

## Key Findings

The lab delivered three compounding insights of direct business relevance.

First, the **accuracy paradox was empirically confirmed**: a zero-effort baseline achieved 99.83% accuracy by predicting the majority class universally, flagging zero fraud cases — a result that would be catastrophically misleading if reported to a non-technical stakeholder.

Second, **logistic regression achieved strong discriminatory power**: ROC-AUC and PR-AUC scores demonstrated that the model meaningfully rank-orders fraud risk, with PR-AUC serving as the more honest benchmark given the extreme class imbalance.

Third, and most operationally significant, **the F1-optimal threshold diverged materially from the 0.5 default** — confirming that threshold selection is a modeling decision, not a hyperparameter to be left at its default value. When the capacity constraint of 500 daily investigations was applied, the optimal operating point shifted again, illustrating that the correct threshold is ultimately determined by the cost structure of the business — not by the model's internal probability calibration.

---

*Stack: Python · scikit-learn (LogisticRegression, confusion\_matrix, classification\_report, roc\_curve, roc\_auc\_score, precision\_recall\_curve, f1\_score) · matplotlib · seaborn · pandas · NumPy*
