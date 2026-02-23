# Hypothesis Testing & Causal Evidence Architecture

## Objective

This project reframes causal analysis from a problem of estimation to one of falsification—operationalizing the scientific method to systematically test and reject competing narratives of causality using the Lalonde (1986) job training dataset.

---

## Overview

Rather than asking, “What is the effect?”, this lab asks the more defensible question:  
**“Can we reject the claim that there is no effect?”**

Using the Lalonde dataset as a structured test case, I built a formal evidence architecture grounded in hypothesis testing. The goal was not merely to estimate an Average Treatment Effect (ATE), but to subject the treatment narrative to statistical stress testing under both parametric and non-parametric assumptions.

---

## Technical Approach

- **Signal-to-Noise Estimation (Welch’s T-Test)**  
  Estimated the Average Treatment Effect (ATE) on real earnings by computing the signal-to-noise ratio using Welch’s T-Test, which relaxes equal-variance assumptions and improves robustness under heteroskedasticity.

- **Non-Parametric Validation (Permutation Test — 10,000 Resamples)**  
  Conducted a large-scale permutation test to simulate the null world in which treatment labels are random. This validated inference against non-normal earnings distributions and distributional misspecification.

- **Type I Error Control (α = 0.05)**  
  Explicitly defined and enforced a statistical decision rule to control false positives, ensuring that rejection of the null hypothesis met pre-specified significance thresholds.

- **SciPy-Based Statistical Infrastructure**  
  Leveraged SciPy’s statistical testing framework to implement both parametric and distribution-free inference, enabling a transparent and reproducible testing pipeline.

---

## Key Findings

- Estimated a statistically significant increase in real earnings of approximately **+$1,795** attributable to job training.
- Both parametric (Welch’s T-Test) and non-parametric (Permutation) methods produced consistent inferential conclusions.
- The Null Hypothesis of zero treatment effect was rejected via statistical contradiction, strengthening causal credibility.

---

## Business Insight

In the algorithmic economy, hypothesis testing functions as a **safety valve against spurious inference**.

Without disciplined falsification:
- Models overfit noise.
- Data grubbing masquerades as insight.
- Spurious correlations become product decisions.

Rigorous hypothesis testing imposes epistemic discipline. By controlling Type I errors and validating assumptions across parametric and non-parametric regimes, we ensure that detected “signals” represent durable effects rather than stochastic artifacts.

In production environments—whether evaluating growth experiments, pricing interventions, or policy changes—this falsification-first framework prevents costly misallocation of capital and preserves organizational trust in data science outputs.

---

## Conclusion

This lab demonstrates that credible causal inference is not about producing impressive estimates—it is about surviving adversarial testing. By embedding falsification logic into the analytical workflow, statistical evidence becomes not just descriptive, but defensible.
