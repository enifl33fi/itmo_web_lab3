package com.enifl33fi.lab3.bean;

import com.enifl33fi.lab3.model.Result;
import com.enifl33fi.lab3.utils.AreaHitChecker;
import com.enifl33fi.lab3.utils.DataBaseManager;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.CopyOnWriteArrayList;

@Getter
@Setter
@NoArgsConstructor
public class ResultManager implements Serializable {
    private Result resultForm = new Result();
    private Result resultCanvas = new Result();
    private final AreaHitChecker hitChecker = new AreaHitChecker();
    DataBaseManager dbManager = new DataBaseManager();
    private List<Result> results = new CopyOnWriteArrayList<>(dbManager.getResults());
    public void addResult(double x, double y, double r) {
        resultForm = new Result();
        resultCanvas = new Result();
        Result result = new Result();
        result.setX(x);
        result.setY(y);
        result.setR(r);
        long startTime = System.nanoTime() / 1000;
        result.setInArea(hitChecker.check(result));
        result.setCurDate(System.currentTimeMillis());
        long curTime = System.nanoTime() / 1000;
        double scriptTime = (curTime - startTime) / 1000.0;
        result.setScriptTime(String.format(Locale.ENGLISH, "%.3fms", scriptTime));
        if (dbManager.saveResult(result)) {
            results.add(result);
        }
    }

}
