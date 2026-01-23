# The Cost of Living Crisis: A Data-Driven Analysis

## The Problem: Why the “Average” CPI Fails Students

The Consumer Price Index (CPI) is designed to measure inflation for the *average* urban consumer. However, students face a fundamentally different cost structure. Tuition, rent, and food dominate student budgets, while many CPI components (e.g., medical care, vehicle purchases, homeownership costs) receive substantial weight despite being largely irrelevant to students.

As a result, headline inflation can significantly understate the true cost-of-living increases experienced by students. This project investigates that gap using official government data and a custom, student-weighted inflation index.

---

## Methodology: Python, APIs, and Index Theory

I collected price index data using the **FRED API** (`fredapi`) and constructed multiple inflation measures in Python using `pandas` and `matplotlib`.

Key methodological steps:

- Retrieved CPI series for:
  - National CPI (CPIAUCSL)
  - Tuition
  - Rent
  - Regional CPI (Boston–Cambridge–Newton)
- Demonstrated why **raw CPI indices with different base years cannot be compared directly**
- Re-indexed all series to a common base year (**2016 = 100**) using standard index theory
- Constructed a **Student-Specific Price Index (Student SPI)** using a **Laspeyres-style weighted index**, where tuition and rent receive substantially higher weights than in the official CPI
- Visualized divergence using normalized time series and shaded inflation gaps

All comparisons are made using normalized indices to ensure differences reflect **relative price changes**, not arbitrary base-year scaling.

---

## Key Findings

- Student-relevant costs (tuition and rent) increased **substantially faster** than the national CPI after 2016.
- The Student SPI diverges meaningfully from headline CPI, revealing that students experience **higher effective inflation** than the average consumer.
- Regional analysis shows that inflation in the Boston–Cambridge–Newton area exceeded national CPI trends, further amplifying cost pressures for students in high-cost metro areas.
- Visualizing raw (non-normalized) CPI series demonstrates a common analytical error: comparing index levels with different base years creates misleading conclusions about price magnitude.

Overall, my analysis reveals a **persistent and growing divergence between student cost inflation and national inflation**, driven by the heavy concentration of student spending in rapidly inflating categories.

---

## Conclusion

Inflation is not a single, universal experience. Aggregate CPI measures can mask substantial heterogeneity across regions and demographic groups. By applying index theory and constructing a custom inflation measure, this project shows how students face a systematically higher cost-of-living increase than suggested by headline CPI figures.

This analysis highlights the importance of **context-specific price indices** in economic measurement and policy discussions.

---

## Tools & Technologies

- Python
- pandas
- matplotlib
- fredapi (FRED API)
- Index theory (Laspeyres index)
- Time series analysis
