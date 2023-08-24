import {lazy} from "react";

export const UserPageLazy = lazy(async () => await import('./UserPage'))
