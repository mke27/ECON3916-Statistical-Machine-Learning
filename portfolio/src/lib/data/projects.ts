import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Recession probability time series (NY Fed style)",
    description:
      "Replicated the Federal Reserve Bank of New York's yield curve model using logistic regression on FRED data. The chart plots monthly recession probability against NBER-dated recessions from 1970–2024, including the model's 44% probability reading at peak yield curve inversion in January 2024.",
    tags: ["Python", "pandas", "matplotlib"],
    githubUrl: "https://github.com/mke27/ECON3916-Statistical-Machine-Learning/blob/main/Lab%2017/lab_17_logistic_regression-1.ipynb",
    image: "/lpm_vs_logistic.png",
  },
  {
    title: "Fraud Detection — ROC & Precision-Recall Curves",
    description:
      "Evaluated a logistic classifier on 284,000 credit card transactions (0.17% fraud rate). ROC curve illustrates why AUC-ROC overstates performance on imbalanced data. Final model achieved F1-optimal threshold via full threshold sweep.",
    tags: ["Python", "scikit-learn", "matplotlib"],
    githubUrl: "https://github.com/mke27/ECON3916-Statistical-Machine-Learning/blob/main/Lab%2018/lab_18_model_evaluation.ipynb",
    image: "/roc.png",
  },
  {
    title: "Bias-Variance Tradeoff — Polynomial Model Selection",
    description:
      "Fit polynomial regression from degree 1 to 15 on a sine-wave DGP and tracked train vs. test RMSE at each complexity level. The resulting U-shaped curve identifies the sweet spot where cross-validation error bottoms out, with an irreducible noise baseline marking the theoretical floor.",
    tags: ["Python", "scikit-learn", "matplotlib"],
    githubUrl: "https://github.com/mke27/ECON3916-Statistical-Machine-Learning/blob/main/Lab%2015/Lab_15.ipynb",
    image: "/rmse.png",
  },
  {
    title: "Feature Importance — MDI vs. Permutation (Random Forest)",
    description:
      "Compared two feature importance methods on the California Housing dataset using a tuned Random Forest (Test R² = 0.83). MDI and permutation importance agree on MedInc as the dominant predictor but diverge on Latitude/Longitude, illustrating how MDI inflates importance for high-cardinality continuous features.",
    tags: ["Python", "scikit-learn", "matplotlib"],
    githubUrl: "https://github.com/mke27/ECON3916-Statistical-Machine-Learning/blob/main/Lab%2019/lab-ch19-guided.ipynb",
    image: "/mdi.png",
  },
  {
    title: "Lasso Regularization Path — IMF Sovereign Risk Indicators",
    description:
      "Traced which World Bank macroeconomic indicators enter the model first as the Lasso penalty relaxes, using panel data across 100+ countries from 2013–2019. The shrinkage path reveals which signals carry the most independent predictive power for sovereign stress — before multicollinearity masks them.",
    tags: ["Python", "scikit-learn", "matplotlib", "pandas"],
    githubUrl: "https://github.com/mke27/ECON3916-Statistical-Machine-Learning/blob/main/Assignment%205/Assignment5.ipynb",
    image: "/lasso.png",
  },
  {
    title: "Heterogeneous Treatment Effects — 401(k) Eligibility by Income",
    description:
      "Applied Double Machine Learning to estimate the causal effect of 401(k) eligibility on net financial assets, partitioned by income quartile. Error bars reflect 95% confidence intervals. Lower-income households show larger effects — consistent with the hypothesis that tax-advantaged savings matter most where liquidity constraints bind.",
    tags: ["Python", "matplotlib", "pandas"],
    githubUrl: "https://github.com/mke27/ECON3916-Statistical-Machine-Learning/blob/main/Lab%2024/lab-ch24-guided.ipynb",
    image: "/heterogeneous.png",
  },
];
