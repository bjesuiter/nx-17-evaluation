import { ComponentFixture, TestBed } from "@angular/core/testing";
import { describe, expect, it } from "vitest";
import { AppComponent } from "./app.component";

/**
 * A test to try component initialization of angular comps in vitest
 * Should be tested with vite.config.ng-comps.ts
 */
describe("main-ui: app.component.ts", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  it("should show welcome message", async () => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeDefined();
  });
});
