package com.enifl33fi.lab3.utils;

import com.enifl33fi.lab3.model.Result;

public class AreaHitChecker {
    public boolean check(Result result) {
        double x = result.getX();
        double y = result.getY();
        double r = result.getR();
        return inInSquare(x, y, r) || isInTriangle(x, y, r) || isInCircle(x, y, r);
    }

    private boolean inInSquare(double x, double y, double r) {
        return (x >= 0 && x <= r / 2) && (y <= 0 && y >= -r);
    }
    private boolean isInTriangle(double x, double y, double r) {
        return (x >= 0 && y >= 0) && (y + x - r) <= 0;
    }
    private boolean isInCircle(double x, double y, double r) {
        return (x <= 0 && y >= 0) && (x * x + y * y - (r * r)) <= 0;
    }
}
