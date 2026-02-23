# Audit 02: Deconstructing Statistical Lies

**Role:** Data Quality Auditor  
**Firm:** Pareto Ventures  
**Objective:** Forensically examine “perfect metrics” and expose statistical distortions hidden behind averages.

---

## Executive Summary

Across three portfolio candidates, we identified a recurring pattern:

> The metric presented was technically correct — but strategically misleading.

We uncovered three major statistical traps:

1. Latency Skew (Mean as Vanity Metric)  
2. False Positive Paradox (Accuracy Without Base Rates)  
3. Survivorship Bias (Graveyards Hidden From View)

Each case demonstrates how averages collapse under heavy-tailed or rare-event conditions.

---

# 1. Latency Skew — The Mean Is a Vanity Metric

### Claim
“Mean Latency = 35ms”

### Audit Simulation
- 1,000 requests
- 980 normal: 20–50ms  
- 20 spikes: 1,000–5,000ms  

### Findings

| Metric | Behavior |
|--------|----------|
| Mean | Inflated by extreme spikes |
| Median | Stable (~35ms) |
| Standard Deviation | Explodes |
| MAD (Median Absolute Deviation) | Remains stable |
| p99 | Reveals system fragility |

### Why This Happens

Standard Deviation squares deviations:

    (x - mean)^2

Large outliers contribute disproportionately to variance.

MAD uses:

    median(|x - median|)

Outliers barely influence it unless they exceed 50% of data.

### Conclusion

The system was not stable — it was heavy-tailed.

The mean hid tail latency risk.  
The p99 exposed churn risk.

---

# 2. False Positive Paradox — Accuracy Without Context

### Claim
“98% Accurate Plagiarism Detection”

- Sensitivity = 98%
- Specificity = 98%

### Critical Variable
Base Rate of Cheating

We computed:

    P(Cheater | Flagged)

### Results

| Scenario | Base Rate | Posterior P(Cheater | Flagged) |
|----------|------------|----------------------------------|
| Bootcamp | 50% | ~98% |
| Econ Class | 5% | ~72% |
| Honors Seminar | 0.1% | ~4.7% |

### Interpretation

In the Honors Seminar:

- 95% of flagged students are innocent.
- False positives overwhelm true positives.

The system is statistically accurate — but operationally dangerous.

### Conclusion

Accuracy without base rate is misleading.

In rare-event detection:

> Base rates dominate outcomes.

---

# 3. Survivorship Bias — The Crypto Graveyard

### Simulation
- 10,000 token launches
- Pareto (power-law) distribution
- Top 1% classified as “survivors”

### Observed Pattern

| Group | Mean Market Cap |
|--------|------------------|
| All Tokens | Low (near zero) |
| Top 1% | Extremely High |

The top 1% inflate perceived average success by 50–100×.

### Mechanism

Power laws imply:

- Most outcomes ≈ zero
- A few extreme winners dominate total value
- The mean is pulled upward by rare outliers

If you exclude the graveyard:

You dramatically overestimate expected returns.

### Conclusion

Survivorship bias manufactures optimism.

Any analysis that excludes failures is statistically invalid.

---

# Cross-Audit Pattern

| Statistical Trap | What Was Shown | What Was Hidden |
|------------------|----------------|------------------|
| Latency | Mean | Tail risk |
| AI Accuracy | Overall % | Base rate impact |
| Crypto Returns | Winners | Graveyard |

Each case exploits the same vulnerability:

> Humans intuitively trust averages — even when the distribution is broken.

---

# Core Lessons for Investors

1. Never trust the mean in heavy-tailed systems.
2. Never evaluate classifiers without base rates.
3. Never analyze markets without including failures.
4. Always check allocation integrity before trusting A/B results.
5. Ask: “What distribution produced this metric?”

---

# Final Verdict

The startups did not fabricate numbers.

They selected metrics that minimized perceived risk.

This is more dangerous than lying —  
because it passes superficial diligence.

Statistical literacy is defensive infrastructure in venture investing.

---

**End of Audit 02**
