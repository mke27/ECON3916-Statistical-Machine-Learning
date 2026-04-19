# The Illusion of Growth & The Composition Effect
## Objective

This project investigates long-term U.S. wage dynamics by correcting nominal wage data for inflation and labor market composition bias. Using live data from the Federal Reserve Economic Data (FRED) API, the analysis examines whether apparent wage growth reflects real increases in worker purchasing power—or statistical artifacts driven by inflation and workforce shifts.

The goal is to empirically demonstrate the persistence of wage stagnation and to explain the misleading wage spike observed during the COVID-19 pandemic.

## Methodology

A Python-based data pipeline was built to retrieve, process, and analyze macroeconomic time series from the Federal Reserve.

## Data Ingestion via FRED API

Retrieved nominal average hourly earnings (AHETPI) and Consumer Price Index (CPI) data using fredapi.

Converted nominal wages into real wages to account for inflation and isolate true purchasing power.

## Anomaly Detection: The Pandemic Spike

Identified a sharp increase in real wages during 2020 that contradicted broader economic conditions.

Flagged this divergence as a potential statistical distortion rather than genuine wage growth.

## Composition Effect Correction Using ECI

Incorporated the Employment Cost Index (ECI), which controls for changes in workforce composition.

Demonstrated that the 2020 wage surge was driven by the disproportionate exit of low-wage workers from the labor force, artificially inflating average wages.

## Visualization & Analysis

Used pandas and matplotlib to visualize long-run wage trends and isolate structural versus statistical effects.

## Key Findings: The Pandemic Paradox

The Money Illusion:
Over the past 50 years, real wages for U.S. workers have remained largely flat despite consistent growth in nominal earnings, highlighting the erosive impact of inflation.

The Pandemic Paradox:
The apparent wage boom in 2020 was not the result of increased labor demand or rising worker productivity. Instead, it was a composition effect—low-wage workers were more likely to lose employment during the pandemic, raising the average wage of the remaining workforce without improving overall worker welfare.

Policy Implication:
Headline wage statistics can be deeply misleading if inflation and labor force composition are not explicitly accounted for, underscoring the importance of robust economic measurement.
