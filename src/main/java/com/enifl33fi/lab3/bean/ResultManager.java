package com.enifl33fi.lab3.bean;

import com.enifl33fi.lab3.model.Result;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Getter
@Setter
@NoArgsConstructor
public class ResultManager implements Serializable {
    private List<Result> results = new CopyOnWriteArrayList<>();

    public void addResult(Result result) {
        results.add(result);
    }

}
