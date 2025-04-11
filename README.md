# Patrones de Diseño: Decorator vs Proxy

Este documento explora dos patrones estructurales fundamentales en el diseño de software orientado a objetos: **Decorator** y **Proxy**. Se analizan su intención, estructura, ejemplos del mundo real, ejemplos de código, diferencias clave y escenarios de uso.

---

## 🎯 Intención

### Decorator
Permitir agregar funcionalidades adicionales a un objeto de manera dinámica, sin modificar su estructura original.

### Proxy
Controlar el acceso a un objeto, añadiendo una capa intermedia que puede realizar tareas como control de acceso, carga diferida o monitoreo.

---

## 🧱 Estructura

### Decorator
- Usa una interfaz común entre el objeto base y los decoradores.
- Los decoradores envuelven al objeto original y añaden comportamiento antes o después de delegar la llamada.

### Proxy
- El proxy implementa la misma interfaz que el objeto real.
- El proxy decide si pasa la solicitud al objeto real o realiza alguna acción extra.

---

## 🌍 Ejemplo del mundo real

### Decorator
**Café con complementos.** Puedes pedir un café básico, y luego agregarle leche, azúcar, crema, etc., sin cambiar la clase original de café.

### Proxy
**Control remoto de televisión.** El control (proxy) permite controlar la TV sin tocarla directamente, añadiendo seguridad o conveniencia.

---

