#!/usr/bin/env pwsh

# Canon Semantic Analyzer Test Suite
# Tests semantic analysis across multiple Canon files

Write-Host "  Canon Semantic Analyzer Test Suite" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green

$totalTests = 0
$passedTests = 0
$failedTests = 0

function Test-CanonFile {
    param(
        [string]$FilePath,
        [string]$TestName
    )
    
    $global:totalTests++
    Write-Host ""
    Write-Host "  Testing: $TestName" -ForegroundColor Cyan
    Write-Host "   File: $FilePath"
    
    try {
        # Parse the canon file
        $parseOutput = npm run parse -- $FilePath 2>&1
        if ($LASTEXITCODE -ne 0) {
            Write-Host "     Parse failed" -ForegroundColor Red
            $global:failedTests++
            return
        }
        
        # Analyze the AST
        $analyzeOutput = npm run analyze -- ast.yaml 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "     Semantic analysis passed (0 errors)" -ForegroundColor Green
            $global:passedTests++
        } else {
            Write-Host "     Semantic analysis failed" -ForegroundColor Red
            $global:failedTests++
        }
    }
    catch {
        Write-Host "     Test execution failed: $_" -ForegroundColor Red
        $global:failedTests++
    }
}

# Test core definition files
Test-CanonFile "definition/schema.canon" "Schema Definition"
Test-CanonFile "definition/config.canon" "Config Definition"

# Test success cases
$successCases = @(
    "basic-config-01",
    "lambda-expression-01",
    "range-operator-01",
    "string-interpolation-01",
    "pipeline-operator-01",
    "spread-operator-01"
)

foreach ($case in $successCases) {
    $filePath = "testcases/success-cases/$case/input.canon"
    if (Test-Path $filePath) {
        Test-CanonFile $filePath "Success Case: $case"
    }
}

# Test examples
$exampleFiles = @(
    "examples/trailing/config.canon"
)

foreach ($file in $exampleFiles) {
    if (Test-Path $file) {
        Test-CanonFile $file "Example: $file"
    }
}

# Summary
Write-Host ""
Write-Host "  Test Results Summary" -ForegroundColor Yellow
Write-Host "======================" -ForegroundColor Yellow
Write-Host "Total Tests: $totalTests"
Write-Host "Passed: $passedTests" -ForegroundColor Green
Write-Host "Failed: $failedTests" -ForegroundColor $(if ($failedTests -eq 0) { "Green" } else { "Red" })

if ($failedTests -eq 0) {
    Write-Host ""
    Write-Host "  All tests passed! Semantic analyzer is working perfectly!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "   Some tests failed. Please check the output above." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "  Semantic Analysis Features:" -ForegroundColor Magenta
Write-Host "     Symbol table with scope management"
Write-Host "     Two-pass struct processing for forward references"
Write-Host "     Name resolution and type checking"
Write-Host "     Built-in types and math functions"
Write-Host "     Range expressions (IntRange/FloatRange)"
Write-Host "     Property and method declarations"
Write-Host "     Function parameter handling"
Write-Host "     Union type support"
Write-Host "     'this' keyword support in structs"

exit $failedTests
