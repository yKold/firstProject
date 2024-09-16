import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ProductsService } from './shared/services/products.service';
import { ListComponent } from './features/list/list.component';

export const routes: Routes = [
    {
        path: "",
        resolve: {
            Products: () => {
                const productsService = inject(ProductsService)

                return productsService.getAll();
            }
        },
        component: ListComponent
    },
    {
        path: "editar/:id",
        resolve: {
            product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
                const productsService = inject(ProductsService)
                return productsService.get(route.paramMap.get("Id") as string);
            }
        },
        loadComponent: () => import("./features/edit/edit.component").then(m => m.EditComponent)
    }
];
