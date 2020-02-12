import { Component, OnInit } from "@angular/core";
import { FeedService } from "./app.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [FeedService]
})
export class AppComponent implements OnInit {
  name = "Angular";
  userFeeds: object = {};
  showForm = false;
  toggleFeedTitle = "Add feed";
  addFeedForm: FormGroup;
  addFeedFormSubmitted: boolean = false;
  newFeedObj: object = {};

  constructor(
    private feedService: FeedService,
    private feedFormBuilder: FormBuilder
  ) {}

  ngOnInit() {
    //get the feeds on load
    this.userFeeds = this.feedService.getFeeds();
    this.addFeedForm = this.feedFormBuilder.group({
      feedName: ["", Validators.required],
      feedUser: ["", Validators.required]
    });
  }

  //function to add a new feed.
  addFeed() {
    //togggling the form show and hide
    this.showForm = !this.showForm;
    //handling the title based on list and form
    this.showForm
      ? (this.toggleFeedTitle = "View Feeds")
      : (this.toggleFeedTitle = "Add Feed");
  }

  get f() {
    return this.addFeedForm.controls;
  }

  addNewFeed() {
    this.newFeedObj = {};
    this.addFeedFormSubmitted = true;
    // stop here if form is invalid
    if (this.addFeedForm.invalid) {
      return;
    }
    //preparing the feed object
    this.newFeedObj = {
      value: this.addFeedForm.value.feedName,
      user: this.addFeedForm.value.feedUser,
      likes: 0,
      timestamp: Date.now(),
      timeZoneOffset: "300",
      id: "1"
    };
    
    //piushing the feed object
    this.userFeeds["feed"].push(this.newFeedObj);
    //hiding the form and resetting. Updating title
    this.showForm = false;
    this.toggleFeedTitle = "Add feed";
    this.addFeedFormSubmitted = false;
    this.addFeedForm.reset();

    alert("success");
  }
}
