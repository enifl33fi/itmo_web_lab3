package com.enifl33fi.lab3.utils;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;
import javax.faces.convert.ConverterException;
import javax.faces.convert.FacesConverter;

@FacesConverter("doubleLocaleConverter")
public class DoubleLocalelConverter implements Converter {

    @Override
    public Object getAsObject(FacesContext context, UIComponent component,
                              String value) {
        try {
            value = value.replace(',', '.');
            return Double.parseDouble(value);
        } catch (NullPointerException e) {
            FacesMessage msg =
                    new FacesMessage("Double Conversion error.",
                            "Given value is null");
            msg.setSeverity(FacesMessage.SEVERITY_ERROR);
            throw new ConverterException(msg);
        } catch (NumberFormatException e) {
            FacesMessage msg =
                    new FacesMessage("Double Conversion error.",
                            "Given value is not double");
            msg.setSeverity(FacesMessage.SEVERITY_ERROR);
            throw new ConverterException(msg);
        }
    }

    @Override
    public String getAsString(FacesContext context, UIComponent component,
                              Object value) {

        return value.toString();

    }
}
