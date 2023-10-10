package com.enifl33fi.lab3.utils;

import com.enifl33fi.lab3.model.Result;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;


public class DataBaseManager {
    EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("jpa-data");
    EntityManager entityManager = entityManagerFactory.createEntityManager();


    public boolean saveResult(Result result) {
        try {
            entityManager.getTransaction().begin();
            entityManager.persist(result);
            entityManager.getTransaction().commit();
            return true;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            entityManager.getTransaction().rollback();
            return false;
        }

    }


    public List<Result> getResults() {
        try {
            entityManager.getTransaction().begin();
            List<Result> results =  entityManager.createQuery("SELECT result from Result result", Result.class)
                    .getResultList();
            entityManager.getTransaction().commit();
            return results;
        } catch (Exception e) {
            entityManager.getTransaction().rollback();
            return new CopyOnWriteArrayList<>();
        }
    }

}
