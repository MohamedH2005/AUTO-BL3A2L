@echo off
echo Starting AutoElite Car Dealership Website...
echo.
echo ========================================
echo   AutoElite Car Dealership Project
echo ========================================
echo.
echo Starting local server on http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
cd frontend
python -m http.server 8000
pause
