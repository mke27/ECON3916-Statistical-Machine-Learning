# SwiftCart Logistics Data Audit: Causal Analysis & Bias Correction

## Overview

This project conducts a **rigorous data audit** for SwiftCart Logistics, focusing on three core areas:

1. **Driver Tip Distribution** – assessing median compensation in a zero-inflated gig economy environment.  
2. **Algorithmic Routing A/B Test** – evaluating the efficacy of a new batch-routing algorithm under heavy-tailed delivery time distributions.  
3. **SwiftPass Loyalty Program** – estimating the true causal effect of the premium subscription on user spending while controlling for selection bias.  

The audit relies on **non-parametric bootstrapping, permutation testing, and propensity score matching (PSM)** to isolate causality from spurious correlations, avoiding fragile parametric assumptions.

---

## Phase 1: Bootstrapping Non-Parametric Uncertainty

- **Problem:** Driver tip data is **zero-inflated and right-skewed**, making standard parametric inference unreliable.  
- **Actions Taken:**  
  - Simulated a dataset of 250 driver tips (100 zero tips, 150 exponential tips).  
  - Built a **manual bootstrap engine** with 10,000 resamples to compute the **median** and a **95% confidence interval**.  
- **Key Insight:**  
  - The CI is **asymmetric**, reflecting the skew and zero inflation, unlike a standard parametric CI.  
  - Demonstrates the importance of **robust, empirical uncertainty quantification**.

---

## Phase 2: Falsification in Logistics A/B Testing

- **Problem:** The batch-routing algorithm shows extreme outliers due to software crashes, violating homoscedasticity assumptions.  
- **Actions Taken:**  
  - Generated synthetic A/B test data: Control (Normal, μ=35, σ=5), Treatment (Log-Normal, mean=3.4, σ=0.4).  
  - Calculated the **observed difference in means** (Control – Treatment).  
  - Built a **manual permutation test** with 5,000 iterations to compute the **empirical p-value**.  
- **Key Insight:**  
  - The permutation test accounts for skew and extreme outliers.  
  - Provides **robust causal evidence** for the effect of the routing algorithm without relying on fragile parametric tests.

---

## Phase 3: SwiftPass Loyalty Program – Selection Bias Analysis

- **Problem:** Marketing claims a 300% increase in spending among subscribers, ignoring **self-selection of high-volume users**.  
- **Actions Taken:**  
  - Calculated the **Naive Simple Difference in Means (SDO)** for post-treatment spending (Subscribers – Non-Subscribers).  
  - Built a **Propensity Score Matching (PSM) architecture**:  
    1. Estimated **propensity scores** via logistic regression on pre-treatment covariates (`pre_spend`, `account_age`, `support_tickets`).  
    2. Matched each Subscriber to the **nearest Non-Subscriber** using `NearestNeighbors`.  
    3. Computed the **Average Treatment Effect on the Treated (ATT)** using only matched controls.  
- **Key Insight:**  
  - **Naive SDO overstates the effect** due to selection bias.  
  - PSM-derived ATT provides a **causal estimate** of SwiftPass impact, reflecting true incremental spending for subscribers.

---

## Phase 4: Covariate Balance – Love Plot Visualization

- **Problem:** Need to visually verify that matching mitigated selection bias.  
- **Actions Taken:**  
  - Built a **Love Plot** using `matplotlib` and `seaborn` to show **Standardized Mean Differences (SMDs)** for all covariates before and after matching.  
  - Evaluated visual evidence: post-matching SMDs should fall within ±0.1.  
- **Key Insight:**  
  - The Love Plot confirms **covariate balance**, providing evidence that the PSM successfully corrected for observable selection bias.  

---

## Tools & Libraries

- Python 3.10+  
- `numpy`, `pandas` – data manipulation  
- `matplotlib`, `seaborn` – visualization  
- `sklearn` – LogisticRegression & NearestNeighbors for PSM  

---

## Conclusion

This audit demonstrates a **rigorous, empirical approach** to:

- Measuring uncertainty in skewed, zero-inflated data  
- Evaluating treatment effects under heavy-tailed distributions  
- Correcting for selection bias in observational data  

By leveraging **bootstrapping, permutation tests, and propensity score matching**, the analysis isolates **true causal effects** from misleading naive metrics, providing SwiftCart Logistics executives with **credible, evidence-based insights**.
