SPEECH SCRIPT — Senior Mobile Engineer, Dodo Technologies

Topic: Dodo Workplace (Mobile) & Dodo Messenger

---
NOTE: This script contains the original speech content with integrated technical details. 
All new technical additions are clearly marked with:
========== NEW ADDITION START: [Section Name] ==========
and
========== NEW ADDITION END: [Section Name] ==========

Everything else is from the original speech script.
---

[Steps onto stage. Small smile. Calm confidence.]

Good morning everyone.

My name is Emmanuel Kwabena Kyeremeh and I serve as the Senior Mobile Engineer at Dodo Technologies.

It's an honour to be here today to talk about the part of Dodo that lives closest to our users — mobile.

At Dodo, we believe something powerful:

If it doesn't work flawlessly on mobile, it doesn't work.

Because in Africa, mobile is not just a device — it is the primary gateway to communication, productivity, and business operations.

So today, I'll walk you through our work on Dodo Workplace (Mobile) and Dodo Messenger.



1. Dodo Workplace Mobile — Work, Without Walls

Dodo Workplace Mobile was built with one mission:

Make work accessible anywhere.

Whether you're in traffic, on a site visit, travelling, or coordinating teams across regions, Workplace puts the entire organisation in your pocket.

What Workplace Mobile Enables:

Instant announcements and updates directly on mobile

Team collaboration through channels, chats, and groups

Task management with real-time notifications

File sharing and approvals without needing a laptop

Offline-first performance, so even in low-connectivity areas, nothing breaks

Our engineering approach focused on speed, reliability, and simplicity, because leaders and teams shouldn't struggle to stay aligned.

Workplace Mobile ensures that no one is ever out of the loop — no matter where they are.

========== NEW ADDITION START: Technical Details for Workplace ==========

**Architecture & Scalability**

To ensure maintainability and scalability as Workplace grows, we implemented Clean Architecture with feature-based modularization:

Views handle user interface and presentation, Controllers manage business logic and application state, Services perform domain-specific and infrastructure operations, and APIs handle communication with backend services.

This separation allows teams to develop and test features independently while minimizing the risk of cross-layer errors. We use GetX for state management and dependency injection, enabling reactive UI updates and efficient memory handling.

**Real-time Communication**

Workplace supports instant messaging, voice, and video calls:

Our messaging is implemented with Socket.IO, maintaining persistent WebSocket connections to deliver messages instantly across all devices.

For voice and video calls, we use WebRTC for low-latency, high-quality streaming. A custom Call Kit provides a unified interface for calls, ensuring a consistent experience across platforms.

**Push Notifications & Reliability**

On iOS, VOIP push notifications via Apple PushKit allow calls to be received even when the app is closed or the device is in low-power mode.

On Android, high-priority notifications with a full-screen call interface ensure reliability.

**Service Layer Architecture**

Our Management Services handle domain-specific operations like ChatManagementService for managing chat states and CallManagementService for handling call logic.

Infrastructure Services provide core functionality including SocketService, ApiService, and BoxService for local storage with Hive.

**Data Persistence & Offline Support**

We use Hive — a lightweight NoSQL storage — for messages, profiles, and conversation lists.

Flutter Secure Storage encrypts sensitive data such as authentication tokens.

Flutter Cache Manager caches files for offline access, improving performance and reducing network load.

**NIA AI Integration**

Our AI integration provides generative capabilities that summarize conversations, draft messages, and offer context-based suggestions.

It also includes agentic capabilities that automate internal actions like initiating calls, sending messages, and scheduling meetings.

**Modular Feature Organization**

Our modules include Authentication, Communication, Dashboard, Scheduling, and Profile.

Flavor-based builds allow separate development and production environments.

Security includes multi-factor authentication, encryption, and prevention of screen capture in sensitive areas.

========== NEW ADDITION END: Technical Details for Workplace ==========



2. Dodo Messenger — All Conversations, One App

If Workplace Mobile helps teams speak internally, Dodo Messenger helps them speak to the world.

With Messenger, businesses can connect through:

WhatsApp

SMS

Email

Social messaging

In-app chat

All from a single mobile interface.

What Makes Messenger Powerful:

Unified inbox on mobile for all channels

AI-assisted responses that help teams reply faster

Message templates for speed

Conversation routing to the right team member

Full history sync between desktop and mobile

Messenger was built to take the stress out of communication.

No more switching apps.

No more scattered conversations.

Just one place to manage every customer message — right from your phone.

========== NEW ADDITION START: Technical Details for Messenger ==========

**Architecture & Core Features**

Messenger uses the same robust engine as Workplace, adapted for external interactions:

Clean Architecture with modularization for maintainability.

GetX state management ensures reactive and performant UI updates.

Dual-channel real-time communication for messaging, voice, and video calls.

**Real-time Messaging**

Persistent WebSocket connections via Socket.IO ensure instant delivery of messages and seamless multi-device synchronization.

**Voice & Video Calls**

WebRTC provides low-latency, high-quality streaming.

Custom Call Kit maintains a consistent call interface across platforms.

Platform-specific notifications: VOIP push for iOS and high-priority full-screen notifications for Android.

**Service Layer Architecture**

Management Services handle conversation states, chat history, and call coordination.

Infrastructure Services include shared services like ApiService, SocketService, and local storage management via Hive.

**Data Persistence & Offline Support**

Hive provides fast structured data storage.

Flutter Cache Manager enables offline media and file access.

Encryption of sensitive data maintains secure communication.

**NIA AI Integration**

Our AI automates responses, schedules follow-ups, and provides actionable insights from conversations.

It generates message drafts, summaries, and intelligent suggestions for customer engagement.

**Scalability & Performance**

Modular design supports independent development of features.

The system handles millions of simultaneous users with reliable real-time communication.

========== NEW ADDITION END: Technical Details for Messenger ==========



The Mobile Engineering Vision

When building these apps, our vision was simple:

Mobile should not be a smaller version of Dodo —

it should be the full Dodo experience.

So every release focuses on:

Performance improvements

Stronger security

Faster load times

Cleaner UI

Offline reliability

And continuous AI integration

Because in 2025 and beyond, mobile is not optional — it is the primary interface for work.



Conclusion

Dodo Workplace Mobile and Dodo Messenger bring the full power of Dodo into the hands of every worker, every leader, and every customer service team.

This is how we help businesses run faster, communicate smarter, and grow without limits.

Thank you, and enjoy the rest of the Dodo Summit.

