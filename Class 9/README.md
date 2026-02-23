# Recovering Experimental Truths via Propensity Score Matching

## Objective

This project demonstrates how Propensity Score Matching (PSM) can be used to correct for selection bias in observational data and recover credible causal estimates that approximate true experimental treatment effects.

---

## Overview

Observational data often fails to replicate experimental results due to systematic differences between treated and control groups. In this lab, I applied modern causal inference techniques to the observational subset of the Lalonde dataset to address this failure and reconstruct the underlying experimental truth.

---

## Methodology

- **Modeled Selection Bias**  
  Estimated the probability of treatment assignment using pre-treatment covariates to explicitly model the non-random selection mechanism present in the observational sample.

- **Estimated Propensity Scores**  
  Built logistic regression models in Python (using Pandas and Scikit-Learn) to compute individual-level propensity scores representing the likelihood of receiving treatment.

- **Applied Nearest-Neighbor Matching**  
  Implemented nearest-neighbor matching algorithms to pair treated units with statistically comparable control units based on estimated propensity scores.

- **Constructed Matched Treatment Effect Estimates**  
  Compared post-treatment outcomes across matched samples to estimate the Average Treatment Effect on the Treated (ATT).

---

## Key Findings

- The **naïve observational estimate** of the treatment effect was **–$15,204**, reflecting severe selection bias.
- After applying Propensity Score Matching, the corrected estimate converged to approximately **+$1,800**.
- The matched estimate closely recovered the true experimental treatment effect, demonstrating how principled causal inference methods can restore credibility to observational analyses.

---

## Technical Stack

- Python  
- Pandas  
- Scikit-Learn  
- Logistic Regression for propensity modeling  
- Custom Nearest-Neighbor matching implementation  

---

## Conclusion

This project illustrates how econometric rigor and modern machine learning tools can be combined to transform biased observational data into credible causal evidence. By explicitly modeling the treatment assignment process and enforcing covariate balance through matching, Propensity Score Matching successfully recovered the experimental benchmark—turning observational failure into empirical reliability.
