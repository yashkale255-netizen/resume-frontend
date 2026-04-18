"use client";

import React, { useState } from "react";
import { UploadCloud, FileText, CheckCircle, XCircle, AlertTriangle, Lightbulb, Loader2 } from "lucide-react";
import { li } from "framer-motion/client";

type AnalysisResult = {
  ats_score: number;
  strengths: string[];
  weaknesses: string[];
  missing_keywords: string[];
  suggestions: string[];
};

export default function ResumeAnalyzerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setError(null);
      setResult(null);
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      setError("Please select a PDF file to analyze.");
      return;
    }

    if (file.type !== "application/pdf") {
      setError("Only PDF files are supported.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5500";
      const response = await fetch(`${baseUrl}/api/v1/analyzer/analyze`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to analyze resume.");
      }

      setResult(data.data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred while analyzing the resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
          AI Resume Analyzer
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Upload your resume to get an instant ATS score and actionable feedback to improve your chances.
        </p>
      </div>

      {!result && (
        <div className="bg-card shadow-sm border rounded-xl overflow-hidden p-8 max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 bg-muted/10 transition-colors hover:bg-muted/20">
            <UploadCloud className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">Drag & drop your resume</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-6">Only PDF up to 5MB</p>

            <label className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-medium transition-colors">
              <span>Browse Files</span>
              <input
                type="file"
                className="hidden"
                accept="application/pdf"
                onChange={handleFileChange}
              />
            </label>
          </div>

          {file && (
            <div className="mt-6 flex items-center justify-between p-4 bg-muted/30 rounded-lg border">
              <div className="flex items-center space-x-3 truncate">
                <FileText className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-sm font-medium truncate">{file.name}</span>
              </div>
              <span className="text-xs text-muted-foreground ml-4">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </span>
            </div>
          )}

          {error && (
            <div className="mt-4 p-4 text-sm text-destructive bg-destructive/10 rounded-lg flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2" />
              {error}
            </div>
          )}

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleAnalyze}
              disabled={!file || loading}
              className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-md font-semibold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-md"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                  Analyzing Resume...
                </>
              ) : (
                "Analyze Resume"
              )}
            </button>
          </div>
        </div>
      )}

      {loading && !result && (
        <div className="mt-12 max-w-2xl mx-auto bg-card p-8 rounded-xl border shadow-sm flex flex-col items-center justify-center">
          <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
          <h3 className="text-xl font-medium">Scanning your resume...</h3>
          <p className="text-muted-foreground text-sm mt-2 text-center">
            Our AI is evaluating your experience, skills, and formatting against industry standards.
          </p>
          <div className="w-full mt-6 bg-muted h-2 rounded-full overflow-hidden">
            <div className="bg-primary h-full rounded-full w-2/3 animate-pulse"></div>
          </div>
        </div>
      )}

      {result && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Header Action */}
          <div className="flex justify-end">
            <button
              onClick={() => {
                setResult(null);
                setFile(null);
              }}
              className="text-sm font-medium text-primary hover:underline"
            >
              Analyze Another Resume
            </button>
          </div>

          {/* ATS Score Card */}
          <div className="bg-card rounded-xl border shadow-md p-6 sm:p-10 flex flex-col md:flex-row items-center gap-10">
            <div className="relative flex items-center justify-center">
              {/* Circular Progress */}
              <svg className="w-40 h-40 transform -rotate-90">
                <circle
                  className="text-muted stroke-current"
                  strokeWidth="12"
                  cx="80"
                  cy="80"
                  r="70"
                  fill="transparent"
                ></circle>
                <circle
                  className={`${result.ats_score >= 80
                      ? "text-emerald-500"
                      : result.ats_score >= 60
                        ? "text-amber-500"
                        : "text-rose-500"
                    } stroke-current`}
                  strokeWidth="12"
                  strokeLinecap="round"
                  cx="80"
                  cy="80"
                  r="70"
                  fill="transparent"
                  strokeDasharray="439.8"
                  strokeDashoffset={439.8 - (439.8 * result.ats_score) / 100}
                ></circle>
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-bold">{result.ats_score}</span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">
                  ATS Score
                </span>
              </div>
            </div>

            <div className="flex-1 space-y-4 text-center md:text-left">
              <h2 className="text-2xl font-bold">
                {result.ats_score >= 80
                  ? "Great job! Your resume is looking strong."
                  : result.ats_score >= 60
                    ? "Good start, but room for improvement."
                    : "Needs significant improvement to pass ATS."}
              </h2>
              <p className="text-muted-foreground">
                Your resume was evaluated on formatting, keyword optimization, and clarity. Below is a detailed breakdown of what you did well and where you can improve.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
              <div className="bg-emerald-500/10 border-b border-emerald-500/20 px-6 py-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                <h3 className="font-semibold text-emerald-700 dark:text-emerald-400">Key Strengths</h3>
              </div>
              <ul className="p-6 space-y-3">
                {result.strengths.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
                {result.strengths.length === 0 && (
                  <li className="text-sm text-muted-foreground italic">No prominent strengths identified.</li>
                )}
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
              <div className="bg-rose-500/10 border-b border-rose-500/20 px-6 py-4 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-rose-600" />
                <h3 className="font-semibold text-rose-700 dark:text-rose-400">Areas to Fix</h3>
              </div>
              <ul className="p-6 space-y-3">
                {result.weaknesses.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <span className="text-rose-500 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
                {result.weaknesses.length === 0 && (
                  <li className="text-sm text-muted-foreground italic">No major weaknesses identified!</li>
                )}
              </ul>
            </div>

            {/* Missing Keywords */}
            <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
              <div className="bg-amber-500/10 border-b border-amber-500/20 px-6 py-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <h3 className="font-semibold text-amber-700 dark:text-amber-400">Missing Keywords</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4">Adding these industry keywords can help you pass ATS scans:</p>
                <div className="flex flex-wrap gap-2">
                  {result.missing_keywords.map((kw, idx) => (
                    <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                      {kw}
                    </span>
                  ))}
                  {result.missing_keywords.length === 0 && (
                    <span className="text-sm text-muted-foreground italic">Your keyword optimization looks good.</span>
                  )}
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
              <div className="bg-blue-500/10 border-b border-blue-500/20 px-6 py-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-blue-700 dark:text-blue-400">Improvement Suggestions</h3>
              </div>
              <ul className="p-6 space-y-3">
                {result.suggestions.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <span className="text-blue-500 mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
